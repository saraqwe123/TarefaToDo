import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function Todo(props) {
    const [todos, setTodos] = useContext(TodoContext);

    const handleDelete = () => {
        const novosTodos = todos.filter(todo => todo.id !== props.id);
        setTodos(novosTodos);
    };

    return (
        <div> 
            <input 
                type="checkbox"
                id={props.id}
                value={props.id}
                checked={props.completed}
                onchange={() => {
                    const novosTodos = todos.map(todo =>
                        todo.id === props.id ? {...todo, completed: !todo.completed} :todo
                    )
                    setTodos(novosTodos);
                }}

            />
            <label htmlFor={props.id}>{props.title}</label>
            <button onClick={handleDelete}>deletar</button>
        </div> 
    );
}

export default Todo;