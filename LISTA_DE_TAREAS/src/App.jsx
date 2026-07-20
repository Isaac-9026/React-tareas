import './index.css';
import TodoApp from "./components/TodoApp";
import { useState } from 'react';

//`<h1>${titulo}</h1>`
// <></> | Fragment
//Pasar Props

 function App() {
  return (
    <section className='containerTodoApp'>
      < TodoApp/>
    </section>
  );
}

export default App;
