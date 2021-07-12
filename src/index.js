import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { history } from './app/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import Login from './components/Login/Login';
import Universities from './components/Universities/Universities';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App>
    <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" render={() => (<Login/>)}/>
      <Route exact path="/universities" render={() => (<Universities/>)}/>
    </Switch>
    </ConnectedRouter>
    </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);