import {createSelector} from "reselect";

export const getLoader = state => state.todoApiReducer.loader
export const getError = state => state.todoApiReducer.error
export const getTodos = state => state.todoApiReducer.todos

export const completedTodo = createSelector(
    getTodos,
    todos => todos.filter(todo=> todo.completed)
)

export const inCompletedTodo = createSelector(
    getTodos,
    todos => todos.filter(todo=> !todo.completed)
)