import React  from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';

import Homepage from './pages/homepage';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
      ...appReducer,
      router: routerReducer,
    }),
    applyMiddleware(middleware, thunk),
);

ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
), document.getElementById('root'));