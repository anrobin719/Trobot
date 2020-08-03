import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import palette from '../../lib/styles/palette';

const EditProfileModal = ({ show, profileSubmit, cancelHandler }) => {
  const fileSelectedHandler = e => {
    console.log(e.target.files[0]);

    if (e.target.files != null || e.target.files[0] != null) {
      const { name } = e.target;

      const reader = new FileReader();
      reader.onload = e => {
        // refImg.setAttribute('src', e.target.result);
        // changeFile(name, e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Modal show={show} modalClosed={cancelHandler}>
      <CloseBtnBox onClick={cancelHandler}>
        <CloseIcon />
      </CloseBtnBox>
      <ContentBox>
        <input
          style={{ display: 'none' }}
          type="file"
          name="img"
          onChange={fileSelectedHandler}
        />
        <ImgContainer>
          <img
            alt="profile_image"
            align="middle"
            width="100%"
            height="100%"
          />
          <EditImgText>
            수정하기
          </EditImgText>
        </ImgContainer>
        <h4>닉네임 : </h4>
        <BtnBox>
          <Button onClick={profileSubmit} theme="outline">
            저장하기
          </Button>
        </BtnBox>
      </ContentBox>
    </Modal>
  );
};

const ImgContainer = styled.div`
  outline: 1px solid cyan;
  position: relative;
  margin: 2rem auto;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #eaeaea;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  cursor: pointer;
`;

const EditImgText = styled.div`
  position: absolute;
  bottom: 0;
  height: 2.6rem;
  width: 100%;
  text-align: center;
  font-weight: 600;
  line-height: 2rem;
  background: rgba(0, 0, 0, 0.2);
`;

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
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 4rem;
  }
`;

const BtnBox = styled.div`
  outline: 1px solid red;
  margin-bottom: 2rem;
`;

export default EditProfileModal;
