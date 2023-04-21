import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    // prevent entering a blank Todo item
    if (newTodo.length === 0) {
      return;
    }
    // need dictionary that contains name and (true/false) to say completed or not
    const todoItem = {
      text: newTodo,
      complete: false
    }
    // setTodos([...todos, newTodo]); changed here for the new dictionary above
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })
    setTodos(filteredTodos);

  }
  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo,i) => {
      if (idx === i) {
        // this is changing an immutable list which is ok but there is a better way by creating a new array Ninja Bonus
        todo.complete = !todo.complete;
        // to avoid mutating the todo directly, do this:
        // const updatedTodo = {...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      // would need to be removed if created above new array example
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div style={{textAlign: "center"}}>
      <h1>Add to the Todo list</h1>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}
      >
        <input 
          onChange = {(event) => {
            setNewTodo(event.target.value);
          }}
          type="text" 
          value={newTodo}
          />
        <div>
          <button>Add</button>
        </div>

      </form>
      <hr />
        <h1>Todo List</h1>
        {/* conditional rendering of css */}
        {
        todos.map((todo,i) => {
          const todoClasses =["bold", "italic"];
          if (todo.complete) {
            todoClasses.push("line-through");
          }
          return (
            <div key={i}>
              {/* need to add the new dictionary format  {todo} changed to {todo.text}*/}
              <span className = {todoClasses.join(" ")}>{todo.text}</span>
              <input onChange = {(event) => {
                handleToggleComplete(i);
              }} checked = {todo.complete} type = "checkbox"/>
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}
              style ={{marginLeft: "10px"}}
              >
                Delete
              </button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;


