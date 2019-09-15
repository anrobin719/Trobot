import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/common/Layout';
import {
  HomePage,
  ListPage,
  PeoplePage,
  AuthPage,
  UserPage,
  PostPage,
  EditorPage,
  NotFoundPage,
} from './pages';
import Logout from './containers/auth/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    const { onCheckAuth } = this.props;
    onCheckAuth();
  }

  render() {
    const { isAuthenticated } = this.props;
    let routes = (
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ListPage} path="/list" />
        <Route component={PeoplePage} path="/people" />
        <Route component={AuthPage} exact path="/auth/:authPath" />
        <Route component={UserPage} path="/user/:userId" />
        <Route component={PostPage} path="/post/:postId" />
        <Redirect to="/" />
        <Route component={NotFoundPage} />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={ListPage} path="/list" />
          <Route component={PeoplePage} path="/people" />
          <Route component={Logout} exact path="/logout" />
          <Route component={UserPage} path="/user/:userId" />
          <Route component={PostPage} path="/post/:postId" />
          <Route component={EditorPage} path="/editor" />
          <Redirect to="/" />
          <Route component={NotFoundPage} />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuth()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
