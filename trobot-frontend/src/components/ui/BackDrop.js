import React from 'react';
import styled, { keyframes } from 'styled-components';

const backdrop = ({ show, clicked }) =>
  show ? <BackDrop show={show} onClick={clicked} /> : null;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${props => (props.show ? fadeIn : fadeOut)} 0.3s ease-out;
`;

export default backdrop;
