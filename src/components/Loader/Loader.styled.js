
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1200;
  transform: 'translate(-50%, -50%)',

    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;