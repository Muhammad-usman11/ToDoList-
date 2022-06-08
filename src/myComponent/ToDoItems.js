import React from 'react'

export default function ToDoItems({todo, onDelete}) {
  let itemsCss = {
    marginTop:"25px",
  }
  return (
    <div style={itemsCss} >
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button type="button" class="btn btn-danger" onClick={()=>{onDelete(todo)} } >Delete</button>
      <br /> <br />
    </div>
  )
}
