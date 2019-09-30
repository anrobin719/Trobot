import React from 'react';

import styled, { keyframes } from 'styled-components';
import device from '../../lib/styles/device';
import Backdrop from './BackDrop';
import shadow from '../../lib/styles/shadow';

const Modal = ({ show, isPost, modalClosed, children }) => {
  return show ? (
    <ModalWrapper isPost={isPost}>
      <Backdrop show={show} clicked={modalClosed}>
        <ModalBox show={show} isPost={isPost}>
          {children}
        </ModalBox>
      </Backdrop>
      {/* <ModalBoxWrapper> */}
      {/* </ModalBoxWrapper> */}
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  // 로그인 모달이 포스트 모달보다 위에 있도록 설정
  // Backdrop
  > div {
    z-index: ${props => (props.isPost ? `200` : `400`)};
    padding: ${props => (props.isPost ? `4rem 10rem` : `0`)};
    overflow: scroll;
    height: 100vh;
    // ModalBox
    > div {
      z-index: ${props => (props.isPost ? `300` : `500`)};
    }
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
  margin: 0 auto 6rem;
  overflow: scroll;
  border-radius: 0.4rem;
  box-sizing: border-box;
  transition: all 1s ease-in-out;
  left: 50%;
  // 모달이 포스트일 경우 top, transform, animation 값 변화
  top: ${props => (props.isPost ? `none` : `50%`)};
  position: ${props => (props.isPost ? `relative` : `fixed`)};
  transform: ${props =>
    props.isPost ? `translate(-50%, 0)` : `translate(-50%, -50%)`};
  background: ${props => (props.isPost ? `none` : `white`)};
  box-shadow: ${props => (props.isPost ? `none` : `${shadow.basic[0]}`)};
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
