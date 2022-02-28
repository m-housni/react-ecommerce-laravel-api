import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [], product: {}
}


export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state
    }
}

/* we can distructurize the action object and pass the action.type as a variable
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_PRODUCTS:
            return
        case SELECTED_PRODUCT:
            return
        case REMOVE_SELECTED_PRODUCT:
            return
        default:
            return state
    }
}
*/