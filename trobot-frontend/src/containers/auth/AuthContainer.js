import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from '../../components/auth/Auth';
import * as actions from '../../store/actions/index';

class AuthContainer extends Component {
  authSubmitHandler = authForm => {
    const { onAuth } = this.props;
    onAuth(authForm);
  };

  render() {
    return <Auth authSubmitHandler={this.authSubmitHandler} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: authForm => dispatch(actions.auth(authForm)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AuthContainer);
