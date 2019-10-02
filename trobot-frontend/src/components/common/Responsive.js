import React from 'react';
import styled from 'styled-components';
import device from '../../lib/styles/device';

const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록 ...rest를 사용합니다.
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

const ResponsiveBlock = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  @media ${device.laptop} {
    width: 768px;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export default Responsive;
