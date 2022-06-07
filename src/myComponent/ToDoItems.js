import React from 'react'

export default function ToDoItems({todo, onDelete}) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button onClick={()=>{onDelete(todo)} } >Delete</button>
    </div>
  )
}
