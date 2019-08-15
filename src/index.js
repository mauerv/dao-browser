import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from './react-auth0-wrapper'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import authConfig from './auth_config.json'
import configureStore from './store/configureStore'

import App from './components/App'

const store = configureStore()

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={authConfig.domain}
      client_id={authConfig.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
)
