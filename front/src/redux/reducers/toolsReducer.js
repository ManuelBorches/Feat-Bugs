import { SET_TOOL, SET_TOOLS, DELETE_TOOL } from '../constants';

const initialState = {
    tool: {},
    tools: []
}

const toolsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOOL:
            return { ...state, tool: action.payload }
        case SET_TOOLS:
            return { ...state, tools: action.payload }
        case DELETE_TOOL:
            return { ...state, tools: state.tools.filter(el => el.id !== action.payload) }
        default:
            return state
    }
}

export default toolsReducer;