import './App.css';

import AppHeader from './components/appHeader';
import NewTodo from './components/NewTodo/newTodo';
import TodoList from './components/Todos/todoList';

function App() {
  return (
    <div>
      <AppHeader />
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
