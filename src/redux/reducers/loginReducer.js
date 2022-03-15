import { ActionTypes } from '../constants/action-types'

const initialState = {}


export const loginReducer = (state = initialState, action) => {

    switch(action.type) {
        case ActionTypes.LOGGED_IN:
            return {
                ...action.payload, ...{status: true}
            }
        case ActionTypes.LOGGED_OUT:
            return {status: false}
        default:
            return state
        
    }

}