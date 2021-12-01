import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from '../../../store/action/todo'

const SingleTodo = ({todo, removeTodo}) =>{
    const {text, isComplete} = todo
    return(
        <div style={{border: "2px solid black", margin:'10px', padding:"25px"}}>
            <p>Title: {text}</p>
            <div>
                {isComplete ? "" : <button>Mark as complete</button>}

                <button onClick={()=>removeTodo(text)}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeTodo: text => dispatch(removeTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(SingleTodo);