import React from 'react'
import ToDoItems from './ToDoItems'

export default function ToDos(props) {
  return (
    
      <div className="container">
        <h2>To Do List</h2>
        { props.todos.length===0? "No To Dos" :
          props.todos.map((todo)=>{
          return <ToDoItems todo={todo} key={todo.sr} onDelete={props.onDelete} />
        })}
      </div>
   
  )
}
