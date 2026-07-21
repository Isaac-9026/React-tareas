import { useState } from "react";

const TodoForm = ({onAgregarNota}) => {
  const [textNote, setTextNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()

    //Aqui tenemos que enviar la nota a la bd

    if(textNote === ""){
        console.log("No se pueden agregar notas vacias")
        return
    }

    const newNote = {
        text: textNote,
        completed: false
    }

    fetch("http://localhost:3000/notas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
    })
    .then(response => response.json())
    .then(data => {
        onAgregarNota(data)
        setTextNote("")
    })


    console.log(textNote)
  };

  /* const handleChange = (e) => {
    setTextNote(e.target.value)
  } */

  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="nota" name="nota" value={textNote} onChange={(event) => setTextNote(event.target.value)}/>
        <button type="submit">Crear Nota</button>
      </form>
    </div>
  );
};

export default TodoForm;
