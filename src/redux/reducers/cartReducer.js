import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [], total: 0, lastRemoved: null
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
            } else if(productExists.qty>1) {
                productExists.qty -= 1
                return {
                    ...state, 
                    products: [...productsCopyLeft, {...productExists}, ...productsCopyRight],
                    total: state.total - action.payload.price
                }
            }
            return state
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state, 
                products: [...productsCopyLeft, ...productsCopyRight],
                total: state.total - action.payload.price*action.payload.qty,
                lastRemoved: null
            }
        case ActionTypes.LAST_REMOVED:
            return {
                ...state,
                lastRemoved: productExists.id
            }
        default:
            return state
    }
}