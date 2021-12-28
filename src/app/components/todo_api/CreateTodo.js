import React, {useEffect} from "react";
import {useState} from "react";

const CreateTodo = (props) =>{
    const [title, setTitle] = useState('');
    return(
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button>Add todo</button>
        </div>
    )
}

export default CreateTodo;