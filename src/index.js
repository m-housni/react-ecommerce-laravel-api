import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
