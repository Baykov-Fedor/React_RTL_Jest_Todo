import React, { useEffect, useState } from "react";

import { STORAGE_KEY } from "../constants/constants";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

import type { Todo } from "../components/typings";

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    ) as Todo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleTodoAdd = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const toogleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldDelete = window.confirm(
      "Are you sure that you want to remove this?"
    );
    if (shouldDelete) setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm addTodo={handleTodoAdd} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toogleHandler}
      />
    </>
  );
};

export default TodoPage;
