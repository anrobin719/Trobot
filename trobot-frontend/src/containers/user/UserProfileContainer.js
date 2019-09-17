import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/user/UserProfile';

class UserProfileContainer extends Component {
  render() {
    const nickname = localStorage.getItem('nickname');
    const email = localStorage.getItem('email');
    const img = localStorage.getItem('img');

    return <UserProfile nickname={nickname} email={email} img={img} like="3" />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default connect(mapStateToProps)(UserProfileContainer);
