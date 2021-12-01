import {ADD_TODO} from "../action/todo";

const INITIAL_STATE = {
    todos: [
        {text:"ABC"},
        {text:"DEF"}
        ]
}

export const todoReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    const {todo} = state
    switch (type){
        case ADD_TODO: return {
            ...state,
            todo: todo.push({'text': payload})
        }
        default:
            return state;
    }
}