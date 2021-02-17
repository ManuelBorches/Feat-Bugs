import { SET_REGISTER_ERROR, SET_LOGIN, SET_LOGIN_ERROR, SET_LOGOUT } from '../constants';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const setRegisterError = (data) => ({ type: SET_REGISTER_ERROR, payload: data })

const setLogIn = (data) => ({ type: SET_LOGIN, payload: data });

export const setLogInError = (data) => ({ type: SET_LOGIN_ERROR, payload: data });

const setLogout = () => ({ type: SET_LOGOUT });

export const postUser = (user) => (dispatch) => 
    axios.post('http://localhost:8000/api/users/register', user)
    .catch(err => dispatch(setRegisterError(true)))

export const logIn = (user) => (dispatch) => 
    axios.post('http://localhost:8000/api/users/login', user)
    .then(res => dispatch(setLogIn(res.data)))
    .catch(err => dispatch(setLogInError(true)))

export const logOut = () => (dispatch) => 
    axios.get('http://localhost:8000/api/users/logout')
    .then((res) => dispatch(setLogout()))

export const isLogged = () => (dispatch) =>
    axios.get('http://localhost:8000/api/users/me')
    .then(res => dispatch(setLogIn(res.data)))