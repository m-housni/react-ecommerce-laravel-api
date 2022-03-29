import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/" /* basename="/react-redux-fake-shop" */>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
