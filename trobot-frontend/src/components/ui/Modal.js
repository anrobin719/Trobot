import React from 'react';

import styled, { keyframes } from 'styled-components';
import device from '../../lib/styles/device';
import Backdrop from './BackDrop';
import shadow from '../../lib/styles/shadow';

const Modal = ({ show, isPost, modalClosed, children }) => {
  return show ? (
    <ModalWrapper isPost={isPost}>
      <Backdrop show={show} clicked={modalClosed} />
      <ModalBox show={show} isPost={isPost}>
        {children}
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  // 로그인 모달이 포스트 모달보다 위에 있도록 설정
  > div:nth-child(1) {
    z-index: ${props => (props.isPost ? `200;` : `400;`)};
    position: fixed;
  }
  > div:nth-child(2) {
    z-index: ${props => (props.isPost ? `300;` : `500;`)};
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
  position: ${props => (props.isPost ? `absolute;` : `fixed;`)}
  left: 50%;
  // 모달이 포스트일 경우 top, transform, animation 값 변화
  top: ${props => (props.isPost ? `none;` : `50%;`)}
  transform: ${props =>
    props.isPost ? `translate(-50%, 0);` : `translate(-50%, -50%);`}
  margin-bottom: 6rem;
  background-color: #fff;
  border-radius: 0.4rem;
  box-shadow: ${shadow.basic[0]};
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
