import { SET_TOOL, SET_TOOLS, DELETE_TOOL } from '../constants';
import axios from 'axios';

//export const setToolError = (data) => ({ type: SET_TOOL_ERROR, payload: data })

const setTool = (data) => ({ type: SET_TOOL, payload: data });
const setTools = (data) => ({ type: SET_TOOLS, payload: data });
const removeTool = (data) => ({ type: DELETE_TOOL, payload: data });

export const getTools = () => (dispatch) => {
    axios.get('http://localhost:8000/api/tools')
    .then(res => dispatch(setTools(res.data)))
}

export const addTool = (tool) => (dispatch) => {
    axios.post('http://localhost:8000/api/tools/', {name: tool})
    .then(res => dispatch(setTool(res.data)))
    //.catch(err => dispatch(setToolError(true)))   
}

export const deleteTool = (toolId) => (dispatch) => {
    axios.post(`http://localhost:8000/api/tools/${toolId}`)
    .then(res => dispatch(removeTool(toolId))) }

