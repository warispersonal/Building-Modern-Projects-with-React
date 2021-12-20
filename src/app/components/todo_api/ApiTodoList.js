import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchTodoApi} from "@/todo_api/todoApiThunk";
import SingleTodo from "@/todo_api/SingleTodo";
import {getLoader, getError, inCompletedTodo, completedTodo} from "@/todo_api/selector";
import CreateTodo from "@/todo_api/CreateTodo";

function ApiTodoList({loader, error, completedTodos, inCompletedTodos, fetchTodoApiProps}){
    useEffect(()=>{
        fetchTodoApiProps()
    },[])

    const completeTodosList = completedTodos.map((item)=>(
        <SingleTodo key={item.id} todo={item} />
    ))

    const inCompleteTodosList = inCompletedTodos.map((item)=>(
        <SingleTodo key={item.id} todo={item} />
    ))

    const showList = error == "" ?
        <div>
            <CreateTodo />
            <div>
                <h1>In-complete todo list</h1>
                {inCompleteTodosList}
            </div>

            <div>
                <h1>Complete todo list</h1>
                {completeTodosList}
            </div>
        </div>
        : error;

    return(
        <div>
            {loader? "Loader" : showList}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        loader: getLoader(state),
        error: getError(state),
        completedTodos: completedTodo(state),
        inCompletedTodos: inCompletedTodo(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchTodoApiProps: () =>dispatch(fetchTodoApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTodoList);