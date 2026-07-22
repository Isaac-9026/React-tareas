import styles from "./TodoApp.module.css";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm/TodoForm";
import {SquarePen} from "lucide-react"
import { Trash2 } from "lucide-react";

function TodoApp() {
  const [notas, setNotas] = useState([]);
  
  useEffect( () => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/notas");

            if (!response.ok){
                throw new Error(`Error http: ${response.status}`);
            }
            const data = await response.json();
            setNotas(data);
            console.log("Notas Cargadas")

        } catch (error) {
            console.log(error);
        }
    };

    fetchData()

  }, []);


  const agregarNota = (nuevaNota) => {
    setNotas([...notas, nuevaNota])
  }

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
    fetch(`http://localhost:3000/notas/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      
      if(!response.ok) {
        throw new Error(`Error al eliminar la nota: ${response.status}`)
      }
      console.log("Nota eliminada correctamente")
    })
    .catch(error => console.error(error));
  }

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <TodoForm onAgregarNota={agregarNota}/>
      <ul className={styles.notelist}>
        {notas.map((nota) => (
          <li className={styles.noteItem} key={nota.id}>
            <span>
                {nota.text}{nota.completed ? "✅" : "❎"}
            </span>
            <div className={styles.iconsContainer}>
                <SquarePen size={26} />
                <Trash2  onClick={() => {eliminarNota(nota.id)}} size={26} />
            </div>
          </li>
        ))}
      </ul>
    </> 
  );
}

export default TodoApp;
