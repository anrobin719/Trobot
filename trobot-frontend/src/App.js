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
import Base from './containers/common/Base';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    const { onCheckAuth } = this.props;
    // 로그인 상태를 확인합니다. 로그인 되어 있을 때, 팔로우 정보, 좋아요 정보 저장합니다.
    onCheckAuth();
  }

  render() {
    const { isAuthenticated } = this.props;
    let routes = (
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route exact component={UserPage} path="/user/:unum" />
        <Route component={ListPage} path="/list/:tag?" />
        <Route component={PeoplePage} path="/people" />
        <Route component={AuthPage} path="/auth/:authPath" />
        <Route component={PostPage} path="/post/:pnum" />
        {/* <Redirect to="/" /> */}
        <Route component={NotFoundPage} />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={UserPage} path="/user/:unum" />
          <Route component={ListPage} path="/list/:tag?" />
          <Route component={PeoplePage} path="/people" />
          <Route component={Logout} path="/logout" />
          <Route component={PostPage} path="/post/:pnum" />
          <Route component={EditorPage} path="/editor/:pnum?" />
          <Redirect to="/" />
          <Route component={NotFoundPage} />
        </Switch>
      );
    }

    return (
      <Layout>
        <Base />
        {routes}
      </Layout>
    );
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
