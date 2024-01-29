import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types/TodoType';
import { updateTodoData } from '../../redux/actions';
import TodoForm from '../NewTodo/todoForm';

type Props = {
  todo: ITodo;
  setIsEditing: (state: boolean) => void;
};
const UpdateTodoItem = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const onUpdateHandler = (todoFormInputs: ITodo) => {
    const todo: ITodo = {
      id: props.todo.id,
      title: todoFormInputs.title,
      description: todoFormInputs.description,
      dueDate: todoFormInputs.dueDate,
      isCompleted: false,
    };
    dispatch(updateTodoData(todo));
  };

  return (
    <>
      <TodoForm
        btnText={'SAVE'}
        btnClassName={'w-3/5'}
        todoAction={onUpdateHandler}
        setIsEditing={props.setIsEditing}
        todo={props.todo}
      />
    </>
  );
};

export default UpdateTodoItem;
