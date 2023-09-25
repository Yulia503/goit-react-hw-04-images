import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledSearchBtn,
} from './Searchbar.styled';

export default function Searchbar({ onSelectCategory }) {
 const onSubmit = event => {
    event.preventDefault();
    onSelectCategory(event.target.elements.search.value.trim());
  };
  
  return (
    <StyledHeader>
      <StyledForm onSubmit={onSubmit}>
        <StyledSearchBtn type="submit">
          <span className="SearchForm-button-label"></span>
        </StyledSearchBtn>

        <StyledInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />


      </StyledForm>


    </StyledHeader>
  );
}

Searchbar.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};
