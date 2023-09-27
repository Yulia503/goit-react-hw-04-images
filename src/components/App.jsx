import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { requestGalleryList } from 'services/Api';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import Loader from './Loader/Loader';
import { POSTS_PER_PAGE } from 'constants/constans';

export const App = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [totalHits, setTotalHits] = useState(null);
  const [modal, setModal] = useState({
    isOpen: false,
    modalData: null,
  });

  useEffect(() => {
    if (!searchTerm || !page) return;
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const galleryList = await requestGalleryList(searchTerm, page);
        setGalleryList(prevState =>
          page === 1 ? galleryList.hits : [...prevState, ...galleryList.hits]
        );
        setTotalHits(galleryList.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery();
  }, [searchTerm, page, totalHits]);

  useEffect(() => {
    const scrollToBottom = () => {
      const pages = window.innerHeight;
      window.scrollTo({
        top: pages * page,
        behavior: 'smooth',
      });
    };
    scrollToBottom();
  }, [galleryList.length, page]);

  const onSelectCategory = category => {
    setSearchTerm(category);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpenModal = data => setModal({ isOpen: true, modalData: data });

  const onCloseModal = () => setModal({ isOpen: false, modalData: null });

  const checkLoadMore = () => {
    const loadMoreHidden = Boolean(totalHits / POSTS_PER_PAGE < page);
    return loadMoreHidden;
  };



  
  const showLoader = isLoading;
  const showError = error;
  const showButton =
    totalHits !== null &&
    !checkLoadMore() &&
    page >= 1 &&
    !showLoader &&
    !showError;
  return (
    <div className="App">
      <Searchbar onSelectCategory={onSelectCategory} />
      {showError && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {galleryList?.length > 0 && (
        <ImageGallery dataList={galleryList} onOpenModal={onOpenModal} />
      )}
      {showLoader && <Loader />}{' '}
      {showButton && <Button onLoadMore={onLoadMore} />}
      {modal.isOpen && (
        <Modal onCloseModal={onCloseModal} modalData={modal.modalData} />
      )}
    </div>
  );
};
