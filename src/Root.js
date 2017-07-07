import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store'
import AppCon from './containers/AppCon'


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <AppCon />
          </Router>
      </Provider>
    )
  }
}
