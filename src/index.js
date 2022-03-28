import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/react-ecommerce-laravel-api" /* basename="/react-redux-fake-shop" */>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
