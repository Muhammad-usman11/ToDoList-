
import { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from './myComponent/Header';
import { AddTodo } from './myComponent/AddTodo';

import ToDos from './myComponent/ToDos';
import About from './myComponent/About';
import Footer from './myComponent/Footer';



function App() {
  let initToDO;
  if (localStorage.getItem("todos") === null){
    initToDO = [];
  }
  else{
    initToDO = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    console.log("i am delete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  console.log("Deleted Todos", todos );
  localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log("i'm adding this todo", title, desc );
    let sr ;
    if (todos.length === 0) {
      sr = 0
    }
    else{
      sr = todos[todos.length - 1].sr + 1;
    }
    const myTodo = {
      sr:sr,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }



  const [todos, setTodos] = useState(initToDO );
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos) )
  
    
  }, [todos])
  

  return (
    <Router> 
    <div>
    
    <Header title="To Do List"/>
        <Routes>
    
          
          
          <Route exact path="/" element={ 
          
          <Fragment>
            <AddTodo addTodo={addTodo}/>  
            <ToDos todos={todos} onDelete={onDelete} />
          </Fragment> 
          
          } />
          

                
          <Route  exact path="/about" element={<About/> } />  
           
          

        </Routes>

    <Footer/>
    

    </div>
    </Router>
  );
}

export default App;
