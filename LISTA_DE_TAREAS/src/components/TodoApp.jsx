function TodoApp ({notasApp}) {


    return (
        <>
            <h1>App de notas</h1>
            <ul>
                <li>{notasApp[0].text}</li>
                <li>{notasApp[1].text}</li>
            </ul>
        </>
    );
}

export default TodoApp;