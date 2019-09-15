import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Auth from '../../components/auth/Auth';
import * as actions from '../../store/actions/index';

class AuthContainer extends Component {
  authSubmitHandler = authForm => {
    const { onAuth } = this.props;
    onAuth(authForm);
  };

  render() {
    const { isAuthenticated, loading, error } = this.props;

    let authRedirect = null;
    if (isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }

    return (
      <>
        {authRedirect}
        <Auth
          loading={loading}
          error={error}
          authSubmitHandler={this.authSubmitHandler}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
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
