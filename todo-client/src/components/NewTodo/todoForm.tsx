import { ChangeEvent, FC, useState } from 'react';
import { ITodo } from '../../types/TodoType';

type Props = {
  todo?: ITodo;
  btnText: string;
  btnClassName: string;
  todoAction: (todo: ITodo) => void;
  setIsEditing?: (state: boolean) => void;
};

let todo = {
  title: '',
  description: '',
  dueDate: '',
};

const TodoForm: FC<Props> = (props: Props) => {
  if (props.todo) {
    todo = {
      title: props.todo.title,
      description: props.todo.description as string,
      dueDate: props.todo.dueDate,
    };
  }

  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const [dueDate, setDueDate] = useState<string>(todo.dueDate);

  const [isTitleValid, setIsTitileValid] = useState<boolean>(true);
  const [isDueDateValid, setIsDueDateTitileValid] = useState<boolean>(true);

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setIsTitileValid(true);
    }
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const dueDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setIsDueDateTitileValid(true);
    }
    setDueDate(event.target.value);
  };

  const onclickHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.length === 0) {
      setIsTitileValid(false);
      return;
    }
    if (dueDate.length === 0) {
      setIsDueDateTitileValid(false);
      return;
    }
    const todoFormInputs: ITodo = {
      title: title,
      description: description,
      dueDate: dueDate,
      isCompleted: false,
    };
    props.todoAction(todoFormInputs);
    {
      props.setIsEditing && props.setIsEditing(false);
    }
    setTitle('');
    setDescription(' ');
    setDueDate('');
  };

  return (
    <div>
      <div className="p-8 px-10 pb-0 mx-10 border-t-2 border-teal-500">
        <form className="text-left">
          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6 col-span-2">
              <label
                htmlFor="title"
                className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
              >
                Title
              </label>
              <input
                type="text"
                itemID="title"
                className={`form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none ${
                  isTitleValid
                    ? 'border-teal-500 focus:border-teal-500'
                    : 'border-red-500 focus:border-red-500'
                }`}
                id="exampleInput123"
                aria-describedby="emailHelp123"
                value={title}
                onChange={e => {
                  titleChangeHandler(e);
                }}
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="dueDate"
                className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
              >
                Due Date
              </label>
              <input
                type="date"
                itemID="dueDate"
                className={`form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none ${
                  isDueDateValid
                    ? 'border-teal-500 focus:border-teal-500'
                    : 'border-red-500 focus:border-red-500'
                }`}
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Due Date"
                value={dueDate}
                onChange={e => {
                  dueDateChangeHandler(e);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="description"
              className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
            >
              Description
            </label>
            <textarea
              itemID="description"
              className="form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-teal-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-500 focus:outline-none"
              id="exampleFormControlTextarea13"
              value={description}
              rows={3}
              onChange={e => {
                descriptionChangeHandler(e);
              }}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="py-8 px-6 text-gray-600">
        <button
          type="button"
          className={`inline-block px-6 py-2.5 bg-teal-500 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${props.btnClassName}`}
          onClick={onclickHandler}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
