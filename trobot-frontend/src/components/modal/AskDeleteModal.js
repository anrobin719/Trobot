import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const AskDeleteModal = ({ show, deleteSubmit, cancelHandler }) => {
  return (
    <Modal show={show} modalClosed={cancelHandler}>
      <CloseBtnBox onClick={cancelHandler}>
        <CloseIcon />
      </CloseBtnBox>
      <ContentBox>
        <span>🤷🏻‍♂️</span>
        <h4>아이디어를 정말 삭제하시겠습니까?</h4>
        <BtnBox>
          <div>
            <Button onClick={deleteSubmit} theme="outline">
              삭제하기
            </Button>
          </div>
          <div>
            <Button onClick={cancelHandler}>취소하기</Button>
          </div>
        </BtnBox>
      </ContentBox>
    </Modal>
  );
};

const CloseBtnBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  padding-right: 2rem;
  width: 100%;
  cursor: pointer;
  svg {
    font-size: 2rem;
    color: ${palette.gray[5]};
  }
`;

const ContentBox = styled.div`
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
      color: ${palette.gray[6]};
    }
    margin-bottom: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;

export default AskDeleteModal;
