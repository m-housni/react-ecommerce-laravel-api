import { ActionTypes } from '../constants/action-types'

const initialState = {
    cartProducts: [],
}


export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART:
            return {...state, cartProducts: [action.payload, ...state.cartProducts]}
        default:
            return state
    }
}