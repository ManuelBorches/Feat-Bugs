import { SET_REGISTER_ERROR, SET_LOGIN, SET_LOGIN_ERROR, SET_LOGOUT } from '../constants'

const initialState = {
    user: {},
    registerError: false,
    logInError: false,
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REGISTER_ERROR:
            return { ...state, registerError: action.payload }
        case SET_LOGIN:
            return { ...state, user: action.payload }
        case SET_LOGIN_ERROR:
            return { ...state, logInError: action.payload }
        case SET_LOGOUT:
            return { ...state, user: {} }
        default:
            return state
    }
}

export default usersReducer;