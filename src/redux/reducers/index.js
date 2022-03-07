import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { selectedProductReducer } from './selectedProductReducer'
import { cartReducer } from './cartReducer'

const reducers = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
})

export default reducers