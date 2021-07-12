import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import { universities } from '../components/Universities/universitiesReducers';
import { login } from '../components/Login/loginReducers';

export const history = createBrowserHistory();

const reducers = combineReducers({
    universities,
    login,
    router: connectRouter(history)
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, routerMiddleware(history))
);

export default store;