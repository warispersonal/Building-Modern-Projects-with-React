import SingleTodo from '@/todo/SingleTodo'
import CreateTodo from '@/todo/CreateTodo'
import React from 'react';
import {connect} from "react-redux";

const TodoList = ({todos}) =>{
    return(
       <div>
           <CreateTodo />
           {todos.map(todo=><SingleTodo key={todo.text} todo={todo} />)}
       </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        todos: state.todoReducer.todos
    }
}

export default connect(mapStateToProps)(TodoList);