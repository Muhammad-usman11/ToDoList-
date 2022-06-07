
import { useState } from 'react';
import Header from './myComponent/Header';
import { AddTodo } from './myComponent/AddTodo';

import ToDos from './myComponent/ToDos';
import Footer from './myComponent/Footer';



function App() {
  const onDelete = (todo) =>{
    console.log("i am delete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }

  const [todos, setTodos] = useState([ 
    {
      sr:1,
      title:"Go to the Mosque",
      desc:"we are going to the mosque for prayers."
    },
    {
      sr:2,
      title:"Go to the KFC",
      desc:"we are going to the mosque for prayers."
    },
    {
      sr:3,
      title:"Go to the School",
      desc:"we are going to the mosque for prayers."
    },
  ]);


  return (
    <div>
    
    <Header title="To Do List"/>
    <AddTodo />
    <ToDos todos={todos} onDelete={onDelete} />
    
    <Footer/>


    </div>
  );
}

export default App;
