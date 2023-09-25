import styled from 'styled-components';
export const StyledOverlay = styled.div`
display: flex;
justify-content: center;
align-items: center;

position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;


  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1200;
`;
export const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
