import React from 'react'
import ToDoItems from './ToDoItems'

export default function ToDos(props) {
  let todosCss = {
    marginTop:"30px",
  }
  let heading = {
    fontWeight:"bold",
    fontFamily: "Comic Sans MS",
  }

  return (
    
      <div className="container" style={todosCss}>
        <h1 style={heading}>To Do List</h1>
        { props.todos.length===0? "No To Dos Found." :
          props.todos.map((todo)=>{
            console.log(todo.sr);
          return <ToDoItems todo={todo} key={todo.sr} onDelete={props.onDelete} />
        })}
      </div>
   
  )
}
