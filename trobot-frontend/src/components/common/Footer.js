import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';

const FooterBlock = styled.div`
  width: 100%;
  height: 16rem;
  background: ${palette.gray[1]};
`;

const Wrapper = styled(Responsive)`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${palette.gray[6]};
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Wrapper>
        <p>contact us</p>
        <p>anrobin719@gmail.com</p>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
