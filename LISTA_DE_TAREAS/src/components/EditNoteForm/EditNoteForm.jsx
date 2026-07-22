import styles from "../todoApp.module.css";
import { useState } from "react";

const EditNoteForm = ({nota, onEditarNota, onCancelar}) => {

    const [textEditado, setTextoEditado] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/notas/${nota.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: textEditado})
            });

            if(!response.ok){
                throw new Error(`Error http:${response.status}`);
            }

            const notaActualizada = await response.json()
            onEditarNota(notaActualizada);
            onCancelar();

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.editForm} >
            <input 
                type="text" 
                value={textEditado} 
                onChange={ (e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
            />

           <button type="submit" className={styles.saveButton}>
                Guardar
            </button> 
           <button 
                type="button" 
                onClick={onCancelar} 
                className={styles.cancelButton}
            >
                Cancelar
            </button> 
        </form>
    );
}


export default EditNoteForm;