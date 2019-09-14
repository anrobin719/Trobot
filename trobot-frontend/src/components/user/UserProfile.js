import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../ui/Button';

const UserProfile = ({ nickname, email, img, like, ideas }) => {
  const editHandler = () => {
    console.log('edit!');
  };
  return (
    <ProfileBox>
      <Wrapper>
        <div>
          <ContentBox>
            <ImgBox>
              <img
                alt="profile_img"
                src="https://images.unsplash.com/photo-1557180340-e7910d785b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80"
              />
            </ImgBox>
            <div>
              <h3>트로봇</h3>
              <p>anrobin@gmail.com</p>
            </div>
          </ContentBox>
          <NumberBox>
            <span>👍 36</span>
            <Button type="button" theme="outlineWhite" onClick={editHandler}>
              수정하기
            </Button>
          </NumberBox>
        </div>
      </Wrapper>
    </ProfileBox>
  );
};

const ProfileBox = styled.section`
  background: rgba(0, 0, 0, 0.6);
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: white;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const ImgBox = styled.div`
  width: 8rem;
  height: 8rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-left: 1rem;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
`;

const NumberBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1rem;
  }
`;

export default UserProfile;
