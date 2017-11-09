import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import isNil from 'lodash/isNil';
import { createApp, createStore } from 'app';

import './styles/index.scss';

let client;

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__;

if (isNil(initialState)) {
  client = createStore(createBrowserHistory(), {});
} else {
  client = createStore(createBrowserHistory(), initialState);
}

const application = createApp(client.store, client.history);
ReactDOM.render(application, window.document.getElementById('app'));
