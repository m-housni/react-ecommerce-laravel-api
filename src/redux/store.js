import { createStore } from 'redux'
import reducers from './reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    const persistor = persistStore(store)

    export {persistor}

export default store