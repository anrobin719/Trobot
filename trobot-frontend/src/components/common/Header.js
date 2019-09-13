import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

const Header = ({ title, emoji }) => {
  return (
    <HeaderBox>
      <Wrapper>
        <h3>{emoji}</h3>
        <h2>{title}</h2>
      </Wrapper>
    </HeaderBox>
  );
};

const Wrapper = styled(Responsive)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  p {
    margin-top: 0.3rem;
    color: ${palette.gray[6]};
  }
`;

const HeaderBox = styled.section`
  padding-bottom: 2rem;
  box-sizing: border-box;
  background: white;
  h3 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Heebo', sans-serif;
  }
`;

export default Header;
