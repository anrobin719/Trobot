import React from 'react';

import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';

const Loading = ({ size }) => {
  return (
    <LoadingWrapper size={size}>
      <LoadingBox>
        <div />
        <div />
        <div />
      </LoadingBox>
    </LoadingWrapper>
  );
};

// source : https://codepen.io/bassetts/pen/RqrPWG
const fit = () => `
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const bounce = keyframes`
  to {
    opacity: 0.6;
    transform: translate3d(0, -1rem, 0);
  }
`;

const LoadingWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 4rem);
  top: 4rem;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
  ${props => props.size === 'fit' && fit}
`;

const LoadingBox = styled.div`
  display: inline-block;
  width: 4.8rem;
  height: 4.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  div {
    float: left;
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: ${palette.point[1]};
    border-radius: 50%;
    animation: 0.6s ${bounce} infinite alternate;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export default Loading;
