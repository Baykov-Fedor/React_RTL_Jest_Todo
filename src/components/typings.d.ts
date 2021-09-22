export type Todo = {
  id: number;
  value: string;
  completed: boolean;
};

export type TodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export type TodoListProps = {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};
