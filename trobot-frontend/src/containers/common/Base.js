import React, { Component } from 'react';

import AskSignInModalContainer from '../modal/AskSignInModalContainer';
import PostModalContainer from '../modal/PostModalContainer';
import AskDeleteModalContainer from '../modal/AskDeleteModalContainer';

class Base extends Component {
  render() {
    return (
      <>
        <AskSignInModalContainer />
        <AskDeleteModalContainer />
        <PostModalContainer />
      </>
    );
  }
}

export default Base;
