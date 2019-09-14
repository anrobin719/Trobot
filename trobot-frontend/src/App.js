import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/common/Layout';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import PeoplePage from './pages/PeoplePage';
import AuthPage from './pages/AuthPage';
import UserPage from './pages/UserPage';
// import EditPage from './pages/EditPage';
// import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ListPage} path="/list" />
        <Route component={PeoplePage} path="/people" />
        <Route component={AuthPage} path="/auth/:authpath" />
        <Route component={UserPage} path="/user" />
        {/* <Route component={EditPage} path="/edit" />
        <Route component={NotFoundPage} /> */}
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}

export default App;
