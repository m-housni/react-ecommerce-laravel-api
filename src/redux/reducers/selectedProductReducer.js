import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [], product: {}
}


export const selectedProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, product: action.payload}
        default:
            return state
    }
}