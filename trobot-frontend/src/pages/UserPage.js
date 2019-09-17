import React from 'react';

import UserContentsContainer from '../containers/user/UserContentsContainer';
import UserProfileContainer from '../containers/user/UserProfileContainer';

const UserPage = ({ match }) => {
  const { unum } = match.params;
  return (
    <>
      <UserProfileContainer unum={unum} />
      <UserContentsContainer unum={unum} />
    </>
  );
};

export default UserPage;
