import axios from 'axios';
import { ITodo } from '../types/TodoType';

export const BASE_URL = 'http://localhost:5000';

export const getTodos = () => {
  return axios.get<ITodo[]>(`${BASE_URL}/todos`);
};

export const createTodo = (todo: ITodo) => {
  return axios.post<ITodo>(`${BASE_URL}/todos/create`, todo);
};

export const updateTodo = (todo: ITodo) => {
  return axios.put<void>(`${BASE_URL}/todos/update/${todo.id}`, todo);
};

export const updateTodoCompleteStatus = (todo: ITodo) => {
  return axios.put<void>(`${BASE_URL}/todos/updateStatus/${todo.id}`, todo);
};

export const deleteTodos = () => {
  return axios.delete<void>(`${BASE_URL}/todos/deleteAll`);
};

export const deleteTodo = (todo: ITodo) => {
  return axios.delete<void>(`${BASE_URL}/todos/delete/${todo.id}`);
};

export const deleteCompletedTodos = () => {
  return axios.delete<void>(`${BASE_URL}/todos/deleteDone`);
};
