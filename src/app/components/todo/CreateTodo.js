import React from 'react';
import {useState} from 'react'

const CreateTodo = () =>{
    const [value, setValue] = useState('');
    return(
        <div>
            <input
                onChange={e => setValue(e.target.value)}
                type="text"
                value={value}
                placeholder="Insert text"/>
            <br />
            <button style={{marginTop: '10px'}}>Save</button>
        </div>
    )
}

export default CreateTodo;