import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Auth0Provider } from '@auth0/auth0-react';

import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/manageReducers';

import '@fontsource/roboto';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  history.replace(appState?.returnTo || window.location.pathname);
};


ReactDOM.render(

    <Provider store={store}>
       <Auth0Provider
         domain={process.env.REACT_APP_AUTH_DOMAIN}
         clientId={process.env.REACT_APP_AUTH_CLIENTID}
         redirectUri={window.location.origin + "/profile"}
         audience={process.env.REACT_APP_AUTH_AUDIENCE}
         scope="read:current_user update:current_user_metadata"
         onRedirectCallback={onRedirectCallback}
        > 

      <Router history={history}>
        <App />
      </Router>

      </Auth0Provider>
    </Provider>
  ,
  document.getElementById('root')
);
