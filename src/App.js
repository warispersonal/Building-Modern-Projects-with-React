import React from "react";
import TodoList from  '@/todo/TodoList'

const App = () =>{
    return(
        <div className="App" style={{textAlign:"center"}}>
            <h1>App Component with react</h1>
            <TodoList />
        </div>
    )
}
export default App;