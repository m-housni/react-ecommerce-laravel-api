import { ActionTypes } from '../constants/action-types'

export const login = (user) => {
    return {
        type: ActionTypes.LOGGED_IN,
        payload: user,
    }
}

export const logout = (user) => {
    return {
        type: ActionTypes.LOGGED_OUT,
        payload: user,
    }
}