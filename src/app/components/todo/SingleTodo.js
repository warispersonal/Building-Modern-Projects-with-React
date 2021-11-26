import React from 'react';

const SingleTodo = ({todo}) =>{
    const {text} = todo
    return(
        <div style={{border: "2px solid black", margin:'10px', padding:"25px"}}>
            <p>Title: {text}</p>
            <div>
                <button>Mark as complete</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default SingleTodo;