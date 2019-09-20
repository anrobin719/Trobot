import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ProfileImg = ({ userId, img, disableBtn }) => {
  return (
    <ProfileImgBox>
      {disableBtn ? (
        <img src={img} alt={userId} />
      ) : (
        <Link to={`/user/${userId}`}>
          <img src={img} alt={userId} />
        </Link>
      )}
    </ProfileImgBox>
  );
};

const ProfileImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProfileImg;
