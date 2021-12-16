import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchTodoApi, displayAlert} from "@/todo_api/todoApiThunk";
import SingleTodo from "@/todo_api/SingleTodo";
function ApiTodoList({loader, error, todos, fetchTodoApiProps}){
    useEffect(()=>{
        fetchTodoApiProps()
    },[])

    const loadTodos = todos.map((item)=>(
        <SingleTodo key={item.id} todo={item} />
    ))

    const showList = error == "" ? loadTodos : error;

    return(
        <div>
            {loader? "Loader" : showList}
        </div>
    )
}

const mapStateToProps = (state) =>{
    const {todoReducer, todoApiReducer} = state
    const {loader, error, todos} = todoApiReducer
    return{
        loader,
        error,
        todos
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchTodoApiProps: () =>dispatch(fetchTodoApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTodoList);