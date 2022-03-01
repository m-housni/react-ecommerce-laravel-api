import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { selectedProductReducer } from './selectedProductReducer'

const reducers = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
})

export default reducers