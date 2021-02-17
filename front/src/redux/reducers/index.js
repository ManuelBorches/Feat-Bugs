import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import toolsReducer from './toolsReducer';
import ordersReducer from './ordersReducer';

export default combineReducers({
   users: usersReducer,
   tools: toolsReducer,
   orders: ordersReducer,
}) 
