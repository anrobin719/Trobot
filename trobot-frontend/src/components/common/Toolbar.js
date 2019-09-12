import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Responsive from './Responsive';

const Header = styled.header`
  width: 100%;
  height: 4rem;
  position: fixed;
  background: white;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 4rem;
`;

const Toolbar = () => {
  return (
    <>
      <Header>
        <Wrapper>
          <Link to="/">Trobot</Link>
        </Wrapper>
      </Header>
      <Spacer />
    </>
  );
};

export default Toolbar;
