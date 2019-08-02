import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './styles/main.scss'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import configureStore from './store/configureStore'

import App from './components/App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
