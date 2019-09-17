import React from 'react';

import UserContentsContainer from '../containers/user/UserContentsContainer';
import UserProfileContainer from '../containers/user/UserProfileContainer';

const UserPage = () => {
  return (
    <>
      <UserProfileContainer />
      <UserContentsContainer />
    </>
  );
};

export default UserPage;
