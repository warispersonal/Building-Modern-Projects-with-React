import {ADD_TODO, REMOVE_TODO} from "../action/todo";

const INITIAL_STATE = {
    todos: [{text:"ABC", isComplete:false}]
}

export const todoReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    const {todos} = state
    switch (type){
        case ADD_TODO: return {
            ...state,
            todos: todos.concat({'text': payload, isComplete: false})
        }

        case REMOVE_TODO: return {
            ...state,
            todos: todos.filter(todo => todo.text !== payload )
        }

        default:
            return state;
    }
}