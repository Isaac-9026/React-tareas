import './App.css';
import TodoApp from "./components/TodoApp";

//`<h1>${titulo}</h1>`
// <></> | Fragment

function App() {
  const titulo = "Curso de React";

  return (
    <section className='containerTodoApp'>
      <TodoApp></TodoApp>
      <h1 className='titulo'>{titulo}</h1>
    </section>
  );
}

export default App;
