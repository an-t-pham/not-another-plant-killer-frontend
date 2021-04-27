import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/manageUsersCollectionsPlants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Auth0Provider
    domain="an-tp.eu.auth0.com"
    clientId="ODD637c2s38AAswbXggHMg8CEVVbl0IQ"
    redirectUri={window.location.origin}
    audience="https://an-tp.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store}>
      <App />
    </Provider>
    
  </Auth0Provider>
  ,
  document.getElementById('root')
);
