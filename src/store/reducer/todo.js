import {ADD_TODO} from "../action/todo";

const INITIAL_STATE = {
    todos: [
        {text:"ABC"},
        {text:"DEF"}
        ]
}

export const todoReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    const {todos} = state
    switch (type){
        case ADD_TODO: return {
            ...state,
            todos: todos.concat({'text': payload})
        }
        default:
            return state;
    }
}