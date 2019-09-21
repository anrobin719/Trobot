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
      // const { changeFile } = props;
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
        {/* 프로필 이미지 관련 박스 */}
        <ProfileImgBox>
          <input
            style={{ display: 'none' }}
            type="file"
            name="img"
            onChange={fileSelectedHandler}
            // ref={ref => (refInput = ref)}
          />
          <ImgContainerLabel>
            <h4>재능 사진 업로드</h4>
            <Button
              type="button"
              theme="outline"
              // onClick={() => refInput.click()}
            >
              사진 고르기
            </Button>
          </ImgContainerLabel>
          <ImgContainer>
            <img
              // ref={ref => (refImg = ref)}
              alt="seleted_image"
              // src={img}
              align="middle"
              width="100%"
              height="100%"
            />
            <EditImgText>수정하기</EditImgText>
          </ImgContainer>
        </ProfileImgBox>
        {/* 닉네임 설정 박스 */}
        <h4>닉네임 : </h4>
        {/* 저장 버튼 박스 */}
        <BtnBox>
          <div>
            <Button onClick={profileSubmit} theme="outline">
              저장하기
            </Button>
          </div>
        </BtnBox>
      </ContentBox>
    </Modal>
  );
};

const ProfileImgBox = styled.div`
  // outline: 1px solid red;
  // 프로필 사진 관련 전체 박스
`;

const ImgContainerLabel = styled.div`
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  // outline: 1px solid cyan;
  position: relative;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background-color: #eaeaea;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

const EditImgText = styled.div`
  height: 4rem;
  line-height: 3rem;
  width: 100%;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
`;

////

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

export default EditProfileModal;
