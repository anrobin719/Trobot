import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/common/ScrollToTop';
import {
  authReducer,
  editorReducer,
  postReducer,
  listReducer,
  baseReducer,
  userReducer,
  peopleReducer,
} from './store/reducers/index';
import {
  watchAuth,
  watchPost,
  watchEditor,
  watchList,
  watchPeople,
  watchUser,
} from './store/sagas';

const rootReducer = combineReducers({
  auth: authReducer,
  editor: editorReducer,
  post: postReducer,
  list: listReducer,
  base: baseReducer,
  user: userReducer,
  people: peopleReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchPost);
sagaMiddleware.run(watchEditor);
sagaMiddleware.run(watchList);
sagaMiddleware.run(watchPeople);
sagaMiddleware.run(watchUser);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.register();
