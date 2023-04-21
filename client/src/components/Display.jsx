import React from 'react'

const Display = ({allTodos, setAllTodos}) => {

  const toggleComplete = (index) => {
    const newTodos = [...allTodos];
    // when toggled, updates with '!' the boolean value to true
    newTodos[index].complete = !newTodos[index].complete;
    setAllTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = allTodos.filter((e, i) => i !== index);
    setAllTodos(newTodos);
  };

  return (
    <div>
      <div className="container p-3 mb-2 bg-success text-white">
          <h1>Your Todo items</h1>
          <hr/>
          {
            allTodos.map((todo, i) => {
              return (
                <div key = {i} className="d-flex mb-2">
                  <div className="form-check col-1">
                    <input type="checkbox" className="form-check-input" id="flexCheckDefault" onChange={() => toggleComplete(i)} checked={todo.complete}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Done</label>
                  </div>
                  <div className="col-9">
                    {/* set conditional to className when box is checked */}
                    <span className={todo.complete ? "text-decoration-line-through" : ""}>{todo.content}</span>
                  </div>
                  <div className="col-3">
                      {/* onClick is made into an inline function to be able to pass the index to the parent */}
                      <button className="btn btn-danger mb-1" onClick={() => removeTodo(i)}>Delete</button>
                  </div>
              </div>
              )
            })
          }
      </div>
    </div>
      
  )
}

export default Display