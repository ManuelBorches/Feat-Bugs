import { SET_ORDER, SET_ORDERS, DELETE_ORDER, EDIT_ORDER, SET_ORDERS_VOTE, ADD_ORDER_VOTE, DELETE_ORDER_VOTE } from '../constants';
import axios from 'axios';

//export const setToolError = (data) => ({ type: SET_TOOL_ERROR, payload: data })

const setOrder = (data) => ({ type: SET_ORDER, payload: data });
const setOrders = (data) => ({ type: SET_ORDERS, payload: data });
const removeOrder = (data) => ({ type: DELETE_ORDER, payload: data });
const editOrder = (data) => ({ type: EDIT_ORDER, payload: data });
const setOrdersVotes = (data) => ({ type: SET_ORDERS_VOTE, payload: data });
const addVote = (data) => ({ type: ADD_ORDER_VOTE, payload: data });
const deleteVote = (data) => ({ type: DELETE_ORDER_VOTE, payload: data });

export const getOrders = (toolId) => (dispatch) =>
    axios.get(`http://localhost:8000/api/orders/${toolId}`)
    .then(res => dispatch(setOrders(res.data)))

export const addOrder = (order) => (dispatch) => 
    axios.post('http://localhost:8000/api/orders/', order)
    .then(res => dispatch(setOrder(res.data)))

export const deleteOrder = (orderId) => (dispatch) => 
    axios.post(`http://localhost:8000/api/orders/${orderId}`)
    .then(res => dispatch(removeOrder(orderId))) 

export const editOrderStatus = (order) => (dispatch) => 
    axios.put('http://localhost:8000/api/orders/edit/', order)
    .then(res => dispatch(editOrder(res.data)))

export const addOrderVote = (order) => (dispatch) => 
    axios.put('http://localhost:8000/api/orders/vote/', order)
    .then(res => {dispatch(editOrder(res.data)); dispatch(addVote(res.data))})

export const quitOrderVote = (order) => (dispatch) => 
    axios.put('http://localhost:8000/api/orders/quitvote/', order)
    .then(res => {dispatch(editOrder(res.data)); dispatch(deleteVote(res.data))})

export const getOrdersVotes = (userId) => (dispatch) =>
    axios.get(`http://localhost:8000/api/orders/votes/${userId}`)
    .then(res => dispatch(setOrdersVotes(res.data)))