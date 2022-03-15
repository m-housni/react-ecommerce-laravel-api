import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { selectedProductReducer } from './selectedProductReducer'
import { cartReducer } from './cartReducer'
import { loginReducer } from './loginReducer'

const reducers = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    login: loginReducer
})

export default reducers