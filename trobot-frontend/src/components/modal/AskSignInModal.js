import React from 'react';

import styled from 'styled-components';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const AskSignInModal = ({
  show,
  signInSubmit,
  signUpSubmit,
  cancelHandler,
}) => {
  return (
    <Modal show={show} modalClosed={cancelHandler}>
      <AskSignInModalBox>
        <span>🙈</span>
        <h4>로그인 후 이용해주세요.</h4>
        {/* 로그인, 회원가입 버튼 박스 */}
        <BtnBox>
          <div>
            <Button onClick={signInSubmit} theme="outline">
              로그인하기
            </Button>
          </div>
          <div>
            <Button onClick={signUpSubmit}>회원가입</Button>
          </div>
        </BtnBox>
      </AskSignInModalBox>
    </Modal>
  );
};

const AskSignInModalBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem;
  span {
    font-size: 4rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }
`;

const BtnBox = styled.div`
  div:first-child {
    margin-bottom: 0.4rem;
  }
  div:last-child {
    button {
      font-size: 0.8rem;
      color: ${palette.gray[6]};
    }
    margin-bottom: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

export default AskSignInModal;
