import {LOAD_TODO, LOAD_TODO_FAILURE, LOAD_TODO_SUCCESS} from "../action/todo_api";
const initialState = {
    loader: false,
    todos: [],
    error: ''
};

export const todoApiReducer = (state = initialState, action) =>{
    const {type, payload} = action
    switch (type){
        case LOAD_TODO: return{
            ...state,
            loader: true,
            error: '',
            todos: []
        }

        case LOAD_TODO_SUCCESS: return {
            ...state,
            loader: false,
            error: '',
            todos: payload
        }

        case LOAD_TODO_FAILURE: return {
            ...state,
            loader: false,
            error: payload,
            todos: []
        }

        default: return state
    }
}