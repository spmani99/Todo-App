import { Dispatch, FC } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoData } from '../../redux/actions';
import { ITodo } from '../../types/TodoType';
import TodoForm from './todoForm';

const NewTodo: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const todoAddHandler = (todoFormInputs: ITodo) => {
    const todo: ITodo = {
      title: todoFormInputs.title,
      description: todoFormInputs.description,
      dueDate: todoFormInputs.dueDate,
      isCompleted: false,
    };
    dispatch(addTodoData(todo));
  };

  return (
    <div className="container mx-auto md:flex md:justify-center py-14">
      <div className="block rounded shadow-lg bg-white w-1/2 text-center">
        <div className="px-4 py-6 sm:px-6">
          <h2 className="text-2xl font-medium leading-6 text-teal-500 text-center">
            CREATE NEW TODO
          </h2>
        </div>
        <TodoForm btnText={'ADD TODO'} btnClassName={'w-3/5'} todoAction={todoAddHandler} />
      </div>
    </div>
  );
};

export default NewTodo;
