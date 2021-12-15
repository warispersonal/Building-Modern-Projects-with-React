import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from '../../../store/action/todo'
import {showAlert} from "@/todo/todoThunk";

const SingleTodo = ({todo, removeTodo, showAlert}) =>{
    const {text, isComplete} = todo
    return(
        <div style={{border: "2px solid black", margin:'10px', padding:"25px"}}>
            <p>Title: {text}</p>
            <div>
                {isComplete ? "" : <button>Mark as complete</button>}

                <button onClick={()=>removeTodo(text)}>Remove</button>

                <button onClick={()=>showAlert(text)}>Show Alert</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeTodo: text => dispatch(removeTodo(text)),
        showAlert: text => dispatch(showAlert(text))
    }
}

export default connect(null, mapDispatchToProps)(SingleTodo);