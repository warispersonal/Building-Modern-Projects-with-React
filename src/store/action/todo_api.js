export const LOAD_TODO = 'LOAD_TODO'
export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS'
export const LOAD_TODO_FAILURE = 'LOAD_TODO_FAILURE'

export const loadTodo = () =>{
    return{
        type: LOAD_TODO
    }
}

export const loadTodoSuccess = (data) => {
    return{
        type: LOAD_TODO_SUCCESS,
        payload: data
    }
}

export const loadTodoFailure =  ( error ) =>{
    return{
        type: LOAD_TODO_FAILURE,
        payload: error
    }
}