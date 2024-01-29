import { TodoState, TodoAction, ITodo } from '../types/TodoType';
import * as actionTypes from '../types/actionTypes';

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: null,
};

const reducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODOS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.ADD_TODOS_SUCCESS: {
      const payload = action.payload as ITodo;
      return {
        ...state,
        loading: false,
        todos: [payload].concat(state.todos),
      };
    }
    case actionTypes.ADD_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload as string };
    case actionTypes.LOAD_TODOS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.LOAD_TODOS_SUCCESS: {
      const payload = action.payload as ITodo[];
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    }
    case actionTypes.LOAD_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload as string };
    case actionTypes.DELETE_TODOS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.DELETE_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [],
      };
    }
    case actionTypes.DELETE_TODO_SUCCESS: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const payload = action.payload! as ITodo;
      const updatedTodos: ITodo[] = state.todos.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        loading: false,
        todos: updatedTodos,
      };
    }
    case actionTypes.DELETE_COMPLETED_TODOS_SUCCESS: {
      const updatedTodos: ITodo[] = state.todos.filter(todo => todo.isCompleted === false);
      return {
        ...state,
        loading: false,
        todos: updatedTodos,
      };
    }
    case actionTypes.DELETE_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload as string };
    case actionTypes.UPDATE_TODOS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.UPDATE_TODOS_SUCCESS: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const payload = action.payload! as ITodo;
      const updatedTodos: ITodo[] = state.todos.map(todo => {
        if (todo.id != payload.id) return todo;
        const updatedTodo: ITodo = {
          ...todo,
          title: payload.title,
          description: payload.description,
          dueDate: payload.dueDate,
          isCompleted: payload.isCompleted,
        };
        return updatedTodo;
      });
      return {
        ...state,
        loading: false,
        todos: updatedTodos,
      };
    }
    case actionTypes.UPDATE_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload as string };
    default:
      return state;
  }
};

export default reducer;
