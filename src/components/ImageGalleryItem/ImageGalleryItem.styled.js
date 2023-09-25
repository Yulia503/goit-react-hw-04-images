import styled from 'styled-components';
export const StyledImageGalleryItem = styled.li`

  border-radius: 5px;
 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);


  & .ImageGalleryItem-image {
    width: 100%;
    height: 260px;

    object-fit: cover;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .ImageGalleryItem-image:hover {
    transform: scale(1.02);
    cursor: zoom-in;
  }
`;
