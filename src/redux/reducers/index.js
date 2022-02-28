import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { selectedProductReducer } from './selectedProductReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer
})

export default reducers