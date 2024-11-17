
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useContext(TodoContext)
    return (
        <>
            {todos.length > 0 ? (
                todos.map((item) => (
                    <Todo key={item.id} id={item.id} title={item.title} completed={item.completed} />
                ))
            ) : (
                <h4><img src="Empty.svg" alt=""/></h4>
            )}
        </>
    );
}

export default TodoList