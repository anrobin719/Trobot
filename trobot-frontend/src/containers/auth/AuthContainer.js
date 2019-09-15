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
    const { loading, error } = this.props;
    return (
      <Auth
        loading={loading}
        error={error}
        authSubmitHandler={this.authSubmitHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: authForm => dispatch(actions.auth(authForm)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);
