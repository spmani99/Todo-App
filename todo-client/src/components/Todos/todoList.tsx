import { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { loadTodosData, removeCompletedTodosData, removeTodosData } from '../../redux/actions';
import { ITodo, TodoState } from '../../types/TodoType';
import TodoItem from './todoItem';

const TodoList: FC = () => {
  const todos: readonly ITodo[] = useSelector((state: TodoState) => state.todos, shallowEqual);

  const compltedTodos: ITodo[] = todos.filter((todo: ITodo) => todo.isCompleted);
  const notCompltedTodos: ITodo[] = todos.filter((todo: ITodo) => !todo.isCompleted);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const onDeleteAllTasksHandler = () => {
    dispatch(removeTodosData());
  };

  const onDeleteAllCompletedTasksHandler = () => {
    dispatch(removeCompletedTodosData());
  };

  useEffect(() => {
    dispatch(loadTodosData());
  }, []);

  return (
    <div className="container mx-auto mb-6 flex flex-col justify-items-stretch items-center">
      <div className="block rounded shadow-lg w-1/2 text-center bg-white">
        <div className="px-4 py-6 sm:px-6 bg-teal-500">
          <h2 className="text-2xl font-medium leading-6 text-white text-left">TODOS</h2>
        </div>
        <ul className="px-2 border-t-2 border-teal-500">
          {notCompltedTodos.length > 0 &&
            notCompltedTodos.map((todo: ITodo) => {
              return <TodoItem key={todo.id} todo={todo} isCompleted={false} />;
            })}
          {notCompltedTodos.length == 0 && (
            <p className="inline-block m-3 text-gray-700 text-sm font-medium">
              No todos to display..
            </p>
          )}
        </ul>
      </div>
      <div className="block rounded shadow-lg w-1/2 mt-6 text-center justify-items-center bg-white">
        <div className="px-4 py-6 sm:px-6 bg-teal-500">
          <h2 className="text-2xl font-medium leading-6 text-white text-left">DONE TODOS</h2>
        </div>
        <ul className="px-2 border-t-2 border-teal-500">
          {compltedTodos.length > 0 &&
            compltedTodos.map((todo: ITodo) => {
              return <TodoItem key={todo.id} todo={todo} isCompleted={true} />;
            })}
          {compltedTodos.length == 0 && (
            <p className="inline-block m-3 text-gray-700 text-sm font-medium">
              No todos to display..
            </p>
          )}
        </ul>
      </div>
      <div className="py-6 px-6 text-gray-600 grid grid-cols-2 w-1/2 gap-5 ">
        <button
          type="button"
          className="inline-block justify-self-stretch Class px-6 py-2.5 bg-teal-500 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => onDeleteAllTasksHandler()}
        >
          DELETE All TODOS
        </button>
        <button
          type="button"
          className="inline-block justify-self-stretch px-6 py-2.5 bg-teal-500 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => onDeleteAllCompletedTasksHandler()}
        >
          DELETE DONE TODOS
        </button>
      </div>
    </div>
  );
};

export default TodoList;
