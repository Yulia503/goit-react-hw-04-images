import styled from 'styled-components';

export const StyledImageGallery = styled.ul`

  list-style: none;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  padding: 0;

  margin-top: 0;
  margin-bottom: 0;

  margin-left: auto;
  margin-right: auto;
`;


