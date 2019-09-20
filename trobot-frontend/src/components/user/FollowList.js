import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ProfileImg from '../ui/ProfileImg';
import palette from '../../lib/styles/palette';

const FollowList = ({ list }) => {
  const followList = list.map(user => {
    return (
      <FollowBox key={user.userId}>
        <Link to={`/user/${user.userId}`}>
          <ContentBox>
            <ProfileImg userId={user.userId} img={user.img} disableBtn />
            <UserInfo>
              <h3>{user.nickname}</h3>
              <h6>{user.email}</h6>
            </UserInfo>
          </ContentBox>
        </Link>
      </FollowBox>
    );
  });

  return <>{followList}</>;
};

const FollowBox = styled.article`
  //   outline: 1px solid red;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${palette.gray[1]};
  cursor: pointer;
`;

const ContentBox = styled.div`
  //   outline: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  //   outline: 1px solid red;
  flex: 1;
  margin-left: 1rem;
  h3 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export default FollowList;
