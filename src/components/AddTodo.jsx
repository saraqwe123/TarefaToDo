import {useContext, useState} from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid'; 
import styles from './AddTodo.module.css';

function AddTodo() {
    const addTodo = (e) => {
        e.preventDefault()

        const novosTodos = [...todos, { id: uuidv4(), title: texto, completed: false }];
        setTodos(novosTodos)
        setTexto('')
    }

    const [texto, setTexto] = useState("")
    const [todos, setTodos] = useContext(TodoContext)

    const tarefasCriadas = todos.length;
    const tarefasConcluidas = todos.filter(todo => todo.completed).length;

    return(
        <div className={styles.cntainer}>
            <div className={styles.imagem}>
            <img src="./Logo.svg" alt="" />
            </div>
            <div>
                <input className={styles.input}
                 value={texto} type="text" onChange={e => setTexto(e.target.value)}/>
                <button className={styles.button} 
                onClick={addTodo}>Criar</button>
            </div>
            <div className={styles.contadores}>
                <p>Tarefas Criadas {tarefasCriadas}</p>
                <p>Tarefas Concluídas {tarefasConcluidas}</p>
            </div>
        </div>
    )
}

export default AddTodo