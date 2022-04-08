import React, { useState } from "react";
import TodoList from "./TodoList";


const App = () => {
  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);


  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index)=>index !== indexValue);
    setTodos(newTodos);
  } 



  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          todo application
        </div>
        <form onSubmit={submitHandler}>
          <label>Enter course :</label>&nbsp;
          <input type="text" name="task" value={task} onChange={changeHandler} />&nbsp;&nbsp;
          <input type="submit" value="add" name="add" />
        </form>
        <TodoList todolist = {todos} deleteHandler={deleteHandler}/>
      </div>
    </div>


  )
}

export default App;
