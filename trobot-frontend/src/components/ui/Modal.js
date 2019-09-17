import React from 'react';

import styled, { keyframes } from 'styled-components';
import device from '../../lib/styles/device';
import Backdrop from './BackDrop';

const Modal = ({ show, isPost, modalClosed, children }) => {
  return show ? (
    <ModalWrapper>
      <Backdrop show={show} clicked={modalClosed} />
      <ModalBox show={show} isPost={isPost}>
        {children}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  > div:last-child {
    z-index: 300;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;
const PostSlideUp = keyframes`
0% {
  transform: translate(-50%, 10%);
  opacity: 0;
}
100% {
  transform: translate(-50%, 0);
  opacity: 1;
}
`;

const ModalBox = styled.div`
  min-width: 500px;
  position: absolute;
  left: 50%;
  // 모달이 포스트일 경우 top, transform, animation 값 변화
  top: ${props => (props.isPost ? `none` : `50%`)}
  transform: ${props =>
    props.isPost ? `translate(-50%, 0);` : `translate(-50%, -50%);`}
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  transition: all 1s ease-in-out;
  animation: ${props => (props.isPost ? PostSlideUp : slideUp)} 0.3s ease-out;

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