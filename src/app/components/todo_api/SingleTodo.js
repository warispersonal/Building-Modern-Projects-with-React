import React from "react";

const SingleTodo = (todo) =>{
    const {id, title, completed, userId} = todo.todo
    return(
        <div style={{marginBottom: "25px", border:"2px solid black"}}>
            <p>{title}</p>
            <p>Id: {id}</p>
            <p>Status: {completed ? "Complete" : "In-complete"}</p>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default SingleTodo