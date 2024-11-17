import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import styles from './App.module.css';

function App() {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;