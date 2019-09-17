import React, { Component } from 'react';

import AskSignInModalContainer from '../modal/AskSignInModalContainer';
import PostModalContainer from '../modal/PostModalContainer';

class Base extends Component {
  render() {
    return (
      <>
        <AskSignInModalContainer />
        <PostModalContainer />
      </>
    );
  }
}

export default Base;
