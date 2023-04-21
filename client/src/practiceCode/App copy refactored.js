import React, { useState } from "react";
import Todo from "../components/Todo";
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
        // to avoid mutating the dodo directly, do this:
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

          return <Todo key={i} 
          todo={todo} 
          handleToggleComplete={handleToggleComplete} 
          i={i}
          handleTodoDelete={handleTodoDelete}/>
        })}
    </div>
  );
}

export default App;


