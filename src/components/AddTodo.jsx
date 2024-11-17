import {useContext, useState} from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid'; 

function AddTodo() {
    const addTodo = (e) => {
        e.preventDefault()

        const novosTodos = [...todos, { id: uuidv4(), title: texto, completed: false }];
        setTodos(novosTodos)
        setTexto('')
    }

    const [texto, setTexto] = useState("")
    const [todos, setTodos] = useContext(TodoContext)
    return(
        <div>
            <div>
                <input value={texto} type="text" onChange={e => setTexto(e.target.value)} className="bg-sky-500" />
                <button onClick={addTodo}>Criar</button>
            </div>
        </div>
    )
}

export default AddTodo