import SingleTodo from '@/todo/SingleTodo'
import CreateTodo from '@/todo/CreateTodo'
import React from 'react';

const TodoList = ({todos}) =>{
    return(
       <div>
           <CreateTodo />
           {todos.map(todo=><SingleTodo key={todo.text} todo={todo} />)}
       </div>
    )
}

export default TodoList;