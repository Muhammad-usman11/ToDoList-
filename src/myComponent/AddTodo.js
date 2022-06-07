import React, { useState } from "react";

export const AddTodo = () => { 
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = ()=>{

    }

    let formCss = {
      marginTop:"50px",
    }
    let titleCss = {
      width:"50vw",
    }

  return (
    <div className="container" style={formCss} >
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlfor="exampleInputTitle" className="form-label">
            Title 
          </label>
          <input style={titleCss}
            type="text"
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
            type="text"
            className="form-control"
            id="exampleInputDescription"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
