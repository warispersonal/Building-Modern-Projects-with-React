import {loadTodo, loadTodoFailure, loadTodoSuccess, markAsCompleteTodo} from "../../../store/action/todo_api";

export const displayAlert = () => () =>{
    alert("Hi, I am waris zargar")
}

export const fetchTodoApi = () => (dispatch, getState) =>{
    dispatch(loadTodo())

    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => dispatch(loadTodoSuccess(json)))
        .catch((e)=> dispatch(loadTodoFailure("Server failure not found")))
}

export const markAsComplete = (id) => (dispatch, getState) =>{
    dispatch(markAsCompleteTodo(id))
}