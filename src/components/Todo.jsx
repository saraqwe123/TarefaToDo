import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./Todo.module.css";

function Todo(props) {
  const [todos, setTodos] = useContext(TodoContext);

  const handleDelete = () => {
    const novosTodos = todos.filter((todo) => todo.id !== props.id);
    setTodos(novosTodos);
  };

  const handleChange = () => {
    const novosTodos = todos.map((todo) =>
      todo.id === props.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(novosTodos);
  };


  return (
    <div className={styles.um}>
      <div className={styles.container}>
        <input
          type="checkbox"
          id={props.id}
          value={props.id}
          checked={props.completed}
          onChange={handleChange}
          onchange={() => {
            const novosTodos = todos.map((todo) =>
              todo.id === props.id
                ? { ...todo, completed: !todo.completed }
                : todo
            );
            setTodos(novosTodos);
          }}
        />
        <label htmlFor={props.id}>{props.title}</label>
        <button onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  );
}

export default Todo;
