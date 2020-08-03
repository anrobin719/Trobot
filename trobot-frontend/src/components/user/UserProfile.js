import React from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../ui/Button';

const UserProfile = ({
  myPage,
  nickname,
  email,
  img,
  loading,
  editHandler,
}) => {
  return (
    <ProfileBox>
      <Wrapper>
        {!loading && (
          <div>
            <ContentBox>
              <ImgBox>
                <img alt="profile_img" src={img} />
              </ImgBox>
              <div>
                <h3>{nickname}</h3>
                <p>{email}</p>
              </div>
            </ContentBox>

            <NumberBox>
              {myPage && (
                <Button
                  type="button"
                  theme="outlineWhite"
                  onClick={editHandler}
                >
                  수정하기
                </Button>
              )}
            </NumberBox>
          </div>
        )}
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
    margin-left: 1.3rem;
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
`;

export default UserProfile;
