import { ActionTypes } from '../constants/action-types'

const initialState = {
    product: {},
}


export const selectedProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {product: action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {product: action.payload}
        default:
            return state
    }
}