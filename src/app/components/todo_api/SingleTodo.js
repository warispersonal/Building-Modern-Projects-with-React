import React from "react";

const SingleTodo = (props) =>{
    const todo = props.todo
    const {id, title, completed, userId} = todo
    return(
        <div style={{marginBottom: "25px", border:"2px solid black"}}>
            <p>{title}</p>
            <p>Id: {id}</p>
            <p>Status: {completed ? "" : <button onClick={()=>props.markComplete(id)}>Mark as complete</button>}</p>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default SingleTodo