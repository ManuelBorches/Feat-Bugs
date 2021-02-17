import { SET_ORDER, SET_ORDERS, EDIT_ORDER, DELETE_ORDER, SET_ORDERS_VOTE, ADD_ORDER_VOTE, DELETE_ORDER_VOTE } from '../constants'

const initialState = {
    orders: [],
    ordersVote: []
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ORDER:
            return { ...state, orders: [...state.orders, action.payload] }
        case SET_ORDERS:
            return { ...state, orders: action.payload }
        case EDIT_ORDER:
            return { ...state, orders: state.orders.map(el => el.id === action.payload.id ? action.payload : el) }
        case DELETE_ORDER:
            return { ...state, orders: state.orders.filter(el => el.id !== action.payload) }
        case SET_ORDERS_VOTE:
            return { ...state, ordersVote: action.payload }
        case ADD_ORDER_VOTE:
            return { ...state, ordersVote: [...state.ordersVote, action.payload] }
        case DELETE_ORDER_VOTE:
            return { ...state, ordersVote: state.ordersVote.filter(el => el.id === action.payload.id) }
        default:
            return state
    }
} 

export default ordersReducer;