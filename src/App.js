import React from "react";
import TodoList from  '@/todo/TodoList'
import ApiTodoList from "@/todo_api/ApiTodoList";
const App = () =>{
    return(
        <div className="App" style={{textAlign:"center"}}>
            <h1>App Component without api</h1>
            <TodoList />
            <h1>App Component with api</h1>
            <ApiTodoList />
        </div>
    )
}
export default App;