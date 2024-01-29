import { DispatchType, ITodo } from '../types/TodoType';
import * as actionTypes from '../types/actionTypes';
import {
  getTodos,
  createTodo,
  updateTodo,
  updateTodoCompleteStatus,
  deleteTodos,
  deleteTodo,
  deleteCompletedTodos,
} from '../api/todo';

export const addTodoData = (todo: ITodo) => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.ADD_TODOS_REQUEST });
    let todoData: ITodo;
    try {
      const response = await createTodo(todo);
      todoData = response.data;
      dispatch({ type: actionTypes.ADD_TODOS_SUCCESS, payload: todoData });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.ADD_TODOS_FAILURE, payload: error.name });
    }
  };
};

export const loadTodosData = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.LOAD_TODOS_REQUEST });
    let todoData: ITodo[];
    try {
      const response = await getTodos();
      todoData = response.data;
      dispatch({ type: actionTypes.LOAD_TODOS_SUCCESS, payload: todoData });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.LOAD_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const updateTodoData = (todo: ITodo) => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.UPDATE_TODOS_REQUEST });
    try {
      await updateTodo(todo);
      dispatch({ type: actionTypes.UPDATE_TODOS_SUCCESS, payload: todo });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.UPDATE_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const updateTodoStatus = (todo: ITodo) => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.UPDATE_TODOS_REQUEST });
    try {
      await updateTodoCompleteStatus(todo);
      dispatch({ type: actionTypes.UPDATE_TODOS_SUCCESS, payload: todo });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.UPDATE_TODOS_SUCCESS, payload: error.message });
    }
  };
};

export const removeTodoData = (todo: ITodo) => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.DELETE_TODOS_REQUEST });
    try {
      await deleteTodo(todo);
      dispatch({ type: actionTypes.DELETE_TODO_SUCCESS, payload: todo });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.DELETE_TODOS_FAILURE, payload: error.name });
    }
  };
};

export const removeTodosData = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.DELETE_TODOS_REQUEST });
    try {
      await deleteTodos();
      dispatch({ type: actionTypes.DELETE_TODOS_SUCCESS });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.DELETE_TODOS_FAILURE, payload: error.name });
    }
  };
};

export const removeCompletedTodosData = () => {
  return async (dispatch: DispatchType) => {
    dispatch({ type: actionTypes.DELETE_TODOS_REQUEST });
    try {
      await deleteCompletedTodos();
      dispatch({ type: actionTypes.DELETE_COMPLETED_TODOS_SUCCESS });
    } catch (error) {
      if (error instanceof Error)
        dispatch({ type: actionTypes.DELETE_TODOS_FAILURE, payload: error.name });
    }
  };
};
