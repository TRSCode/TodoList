import React, {useState} from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <Form allTodos={allTodos} setAllTodos={setAllTodos}/>
      <Display allTodos={allTodos} setAllTodos={setAllTodos}/>
    </div>
  );
}

export default App;


