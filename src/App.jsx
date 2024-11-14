import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <div className='w-screen h-screen'>
        <AddTodo/>
        <TodoList/>
      </div>
    </TodoProvider>

  )
}

export default App

