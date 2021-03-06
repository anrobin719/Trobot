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
    </ModalWrapper>
  ) : null;
};

const ModalWrapper = styled.div`
  // Backdrop
  > div {
    z-index: ${props => (props.isPost ? `200` : `400`)};
    overflow: scroll;
    height: 100vh;
    margin: 0 auto;
    // ModalBox
    > div {
      z-index: ${props => (props.isPost ? `300` : `500`)};
    }
  }

  @media ${device.tablet} {
    // Backdrop
    > div {
      padding: ${props => (props.isPost ? `0 2rem` : `0`)};
    }
  }
  @media ${device.mobileL} {
    // Backdrop
    > div {
      padding: ${props => (props.isPost ? `0 1rem` : `0`)};
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
  width: ${props => (props.isPost ? `1024px` : `500px`)};
  margin-top: 4rem;
  overflow: scroll;
  border-radius: 0.4rem;
  box-sizing: border-box;
  transition: all 1s ease-in-out;
  left: 50%;
  
  top: ${props => (props.isPost ? `none` : `50%`)};
  position: ${props => (props.isPost ? `relative` : `fixed`)};
  transform: ${props =>
    props.isPost ? `translate(-50%, 0)` : `translate(-50%, -50%)`};
  background: ${props => (props.isPost ? `none` : `white`)};
  box-shadow: ${props => (props.isPost ? `none` : `${shadow.basic[0]}`)};
  animation: ${props => (props.isPost ? PostSlideUp : slideUp)} 0.3s ease-out;
  @media ${device.laptop} {
    width: ${props => (props.isPost ? `768px` : `500px`)};
  }
  @media ${device.tablet} {
    max-width: ${props => (props.isPost ? `100%` : `90%`)};
  }
`;

export default Modal;
