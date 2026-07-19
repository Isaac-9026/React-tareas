function TodoApp ({notasApp}) {

    const mostrarNotas = () => {
        console.log(notasApp)
    };

    return (
        <>
            <h1>App de notas</h1>
            <ul>
                <li>{notasApp[0].text}</li>
                <li>{notasApp[1].text}</li>
            </ul>
            <button onClick={mostrarNotas}>
                Mostrar notas por consola
            </button>
        </>
    );
}

export default TodoApp;