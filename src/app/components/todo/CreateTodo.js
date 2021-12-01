import React from 'react';
import {useState} from 'react'
import {connect} from "react-redux";
import {addTodo} from '../../../store/action/todo';

const CreateTodo = ({todos, addTodo}) =>{
    const [value, setValue] = useState('');
    const addTodoItem = () =>{
        let isExists = todos.some(todo => todo.text == value)
        if(!isExists)
        {
            addTodo(value)
        }
        else{
            alert("Value already exists")
        }
        setValue('')
    }
    return(
        <div>
            <input
                onChange={e => setValue(e.target.value)}
                type="text"
                value={value}
                placeholder="Insert text"/>
            <br />
            <button onClick={ addTodoItem } style={{marginTop: '10px'}}>Save</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo:text => dispatch(addTodo(text))
    }
}

const mapStateToProps = (state) =>{
    return{
        todos: state.todoReducer.todos
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateTodo);