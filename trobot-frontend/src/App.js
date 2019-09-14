import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/common/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import PeoplePage from './pages/PeoplePage';
import AuthPage from './pages/AuthPage';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
// import EditPage from './pages/EditPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ListPage} path="/list" />
        <Route component={PeoplePage} path="/people" />
        <Route component={AuthPage} path="/auth/:authPath" />
        <Route component={UserPage} path="/user" />
        <Route component={PostPage} path="/post/:postId" />
        {/* <Route component={EditPage} path="/edit" /> */}
        <Route component={NotFoundPage} />
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}

export default App;
