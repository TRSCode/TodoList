import React, {useState} from 'react';


const Form = ({allTodos, setAllTodos}) => {
  const [todoText, setTodoText] = useState(
    {
    content: "",
    complete: false
  }
  );

  const [errors, setErrors] = useState([]);

  const todoValidation =() => {
    let isValid = true
    if (todoText.content.length < 3){
      isValid = false
    }
    return isValid
  }

  const changeHandler = (e) => {
    setTodoText({...todoText, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoValidation()){
      setAllTodos([...allTodos, todoText])
      setTodoText({
        content: "",
        complete: false
      })
    }else{
      setErrors(
        "there was an error"
      )
    }
    setErrors("");
  }

  return (
    <div>
      <div className="container p-3 mb-2 bg-secondary text-white">
        <h1>Create a Todo item</h1>
        {errors ? <p>{errors}</p> : null}
        <form onSubmit={submitHandler}>
          <input type="text" onChange={changeHandler} name="content" id="content" value={todoText.content}/>
          {todoText.content && todoText.content.length < 3 ? <p>Todo must be more than 2 characters</p>: null}
          <button className="btn btn-info mx-3">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Form