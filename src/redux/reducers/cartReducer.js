import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [], total: 0
}


export const cartReducer = (state = initialState, action) => {
    const productExists = state.products.find(product => product.id === action.payload.id)
    var productExistsIndex =  state.products.findIndex(product => product.id === action.payload.id)
    var productsCopyLeft = [], productsCopyRight = []
    if(productExists) {
        productsCopyLeft = [...state.products.filter((product, idx) => idx < productExistsIndex)]
        productsCopyRight = [...state.products.filter((product, idx) => idx > productExistsIndex)]
    }
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            if(!productExists) {
                return {
                    ...state, 
                    products: [...state.products, {...action.payload, qty: action.payload.qty ?? 0 + 1}],
                    total: state.total + action.payload.price
                }
            } else {
                productExists.qty += 1
                return {
                    ...state, 
                    products: [...productsCopyLeft, {...productExists}, ...productsCopyRight],
                    total: state.total + action.payload.price
                }
            }
            return state
        case ActionTypes.DECREMENT_QTY:
            if(!productExists) {
                return state
            } else {
                productExists.qty = productExists.qty > 1 ? --productExists.qty : 1
                return {
                    ...state, 
                    products: [...productsCopyLeft, {...productExists}, ...productsCopyRight],
                    total: state.total - action.payload.price
                }
            }
            return state
        default:
            return state
    }
}