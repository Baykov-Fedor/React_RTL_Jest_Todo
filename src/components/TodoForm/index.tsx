import { useState } from "react";

import { TASK_TITLE, TODO_FIELDS } from "../../constants/constants";

import type { TodoFormProps } from "../typings";

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTodo = {
        [TODO_FIELDS.ID]: Date.now(),
        [TODO_FIELDS.VALUE]: taskTitle,
        [TODO_FIELDS.COMPLETED]: false,
      };
      addTodo(newTodo);
      setTaskTitle("");
    }
  };

  return (
    <div className="input-field mt_2">
      <input
        placeholder="Type your task"
        className="main_input"
        name={TASK_TITLE}
        id={TASK_TITLE}
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={taskTitle}
      />
      <label htmlFor={TASK_TITLE} className="active">
        Type here your "to do"
      </label>
    </div>
  );
};

export default TodoForm;
