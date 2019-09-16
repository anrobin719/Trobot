import React from 'react';

import styled, { keyframes } from 'styled-components';
import device from '../../lib/styles/device';
import Backdrop from './BackDrop';

const Modal = ({ show, modalClosed, children }) => {
  return show ? (
    <ModalWrapper>
      <Backdrop show={show} clicked={modalClosed} />
      <ModalBox show={show}>{children}</ModalBox>
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  > div:first-child {
    z-index: 500;
  }
  > div:last-child {
    z-index: 600;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%);
    opacity: 1;
  }
`;

const slideDown = keyframes`
0% {
    transform: translateY(-50%);
    opacity: 1;
}
100% {
    transform: translateY(-40%);
    opacity: 0;
}
`;

const ModalBox = styled.div`
  width: 500px;
  position: fixed;
  top: 50%;
  left: calc(50% - 250px);
  transform: translateY(-50%);
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  transition: all 1s ease-in-out;
  animation: ${props => (props.show ? slideUp : slideDown)} 0.3s ease-out;

  @media ${device.tablet} {
    max-width: 70%;
    left: calc(50% - 35%);
    padding: 2rem 1.6rem;
  }

  @media ${device.mobileL} {
    max-width: 90%;
    left: calc(50% - 45%);
    padding: 2rem 1rem;
  }
`;

export default Modal;
