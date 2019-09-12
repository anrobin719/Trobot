import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ListPage from './pages/ListPage';
// import EditPage from './pages/EditPage';
// import PeoplePage from './pages/PeoplePage';
// import UserPage from './pages/UserPage';
// import AuthPage from './pages/AuthPage';
// import NotFoundPage from './pages/NotFoundPage';
import Layout from './containers/common/Layout';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route component={HomePage} exact path="/" />
        {/* <Route component={ListPage} path="/list" />
        <Route component={EditPage} path="/edit" />
        <Route component={PeoplePage} path="/people" />
        <Route component={UserPage} path="/user" />
        <Route component={AuthPage} path="/auth" />
        <Route component={NotFoundPage} /> */}
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}

export default App;
