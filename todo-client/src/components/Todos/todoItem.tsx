import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../types/TodoType';
import { removeTodoData, updateTodoStatus } from '../../redux/actions';
import UpdateTodoItem from './updateTodo';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

type Props = {
  key: number | undefined;
  todo: ITodo;
  isCompleted: boolean;
};

const TodoItem = (props: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(props.isCompleted);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const onDeleteHandler = () => {
    dispatch(removeTodoData(props.todo));
  };

  const onCompleteHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const status = event.target.checked;
    const todo: ITodo = {
      id: props.todo.id,
      title: props.todo.title,
      description: props.todo.description,
      dueDate: props.todo.dueDate,
      isCompleted: status,
    };
    dispatch(updateTodoStatus(todo));
    setIsCompleted(!isCompleted);
  };

  const onUpdateHandler = () => {
    setIsEditing(true);
  };

  return (
    <li>
      {!isEditing && (
        <div className="flex flex-row border-t border-gray-200">
          <input
            type="checkbox"
            className="h-10 w-10 m-5 my-auto border rounded-sm bg-white focus:outline-none transition duration-200 cursor-pointer content-center"
            onChange={e => onCompleteHandler(e)}
            checked={isCompleted}
          />
          <div
            className={`flex flex-col grid grid-col-1 w-full p-3 ${
              isCompleted ? 'line-through' : ''
            }`}
          >
            <p className="text-lg font-medium leading-6 text-gray-900 text-left p-1">
              {props.todo.title}
            </p>
            <p className="text-base font-medium text-gray-500 text-left p-1">
              {props.todo.description}
            </p>
            <p className="text-base font-medium text-gray-500 text-left p-1">
              Due Date - {props.todo.dueDate}
            </p>
          </div>
          <div className="m-6">
            <button onClick={() => onDeleteHandler()} className="py-2">
              <AiFillDelete size={25} />
            </button>
            {!isCompleted && (
              <button onClick={() => onUpdateHandler()} className="py-2">
                <AiFillEdit size={25} />
              </button>
            )}
          </div>
        </div>
      )}
      {isEditing && <UpdateTodoItem todo={props.todo} setIsEditing={setIsEditing} />}
    </li>
  );
};

export default TodoItem;
