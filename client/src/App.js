import React, {useState} from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const removeTodo = (index) => {
    const newTodos = allTodos.filter((e, i) => i !== index);
    setAllTodos(newTodos);
  };

  return (
    <div className="App">
      <Form allTodos={allTodos} setAllTodos={setAllTodos}/>
      <Display allTodos={allTodos} setAllTodos={setAllTodos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;


