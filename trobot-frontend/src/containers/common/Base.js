import React, { Component } from 'react';

import AskSignInModalContainer from '../modal/AskSignInModalContainer';
import PostModalContainer from '../modal/PostModalContainer';
import AskDeleteModalContainer from '../modal/AskDeleteModalContainer';
import EditProfileModalContainer from '../modal/EditProfileModalContainer';

class Base extends Component {
  render() {
    return (
      <>
        <AskSignInModalContainer />
        <AskDeleteModalContainer />
        <PostModalContainer />
        <EditProfileModalContainer />
      </>
    );
  }
}

export default Base;
