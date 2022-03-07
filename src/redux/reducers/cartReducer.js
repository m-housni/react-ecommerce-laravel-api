import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [], total: 0
}


export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            if(!state.products.find(product => product.id === action.payload.id)) {
                return {
                    ...state, 
                    products: [...state.products, {...action.payload, qty: action.payload.qty ?? 0 + 1}],
                    total: state.total + action.payload.price
                }
            }
            return state
        default:
            return state
    }
}