import React, { useState } from "react";

export const AddTodo = ({addTodo}) => { 
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
      e.preventDefault();
      if (!title || !desc){
        alert("Please input Title or Description")
      }
      addTodo(title, desc)
      setTitle("")
      setDesc("")
    }

    let formCss = {
      marginTop:"50px",
    }
    let titleCss = {
      width:"50vw",
    }

  return (
    <div className="container" style={formCss} >
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlfor="exampleInputTitle" className="form-label">
            Title 
          </label>
          <input style={titleCss}
            type="text" value={title} onChange={(e)=>setTitle(e.target.value)}
            class="form-control"
            id="exampleInputTitle"
            aria-describedby="titleHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputDescription" className="form-label">
            Description
          </label>
          <input style={titleCss}
            type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="exampleInputDescription"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add 
        </button>
      </form>
    </div>
  );
};
