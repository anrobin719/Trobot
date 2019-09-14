import React from 'react';

import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <Back>
      <Content>
        <span>🤦🏻‍♀️</span>
        <h3>404 Error</h3>
        <div>
          {/* <p>페이지를 표시할 수 없습니다.</p> */}
          <Button to="/" theme="outlineWhite" type="button">
            홈으로 이동
          </Button>
        </div>
      </Content>
    </Back>
  );
};

const Back = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background: ${palette.blue[9]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  span {
    font-size: 8rem;
  }
  h3 {
    font-size: 5rem;
    line-height: 6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    p {
      margin-right: 2rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;

export default NotFoundPage;
