export interface ITodo {
  id?: number;
  title: string;
  description?: string;
  dueDate: string;
  isCompleted: boolean;
}

export type TodoState = {
  loading: boolean;
  todos: ITodo[];
  error: string | null;
};

export type TodoAction = {
  type: string;
  payload?: ITodo | ITodo[] | string;
};

export type DispatchType = (args: TodoAction) => TodoAction;
