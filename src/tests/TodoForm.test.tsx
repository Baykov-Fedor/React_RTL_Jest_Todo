import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { TASK_1 } from "../constants/constants";
import TodoForm from "../components/TodoForm";
import userEvent from "@testing-library/user-event";

describe("Todo Form", () => {
  let handleTodoAdd: jest.Mock<any, any>;
  beforeEach(() => {
    handleTodoAdd = jest.fn();
  });

  it("Renders todo form", () => {
    const { asFragment } = render(<TodoForm addTodo={handleTodoAdd} />);
    expect(asFragment).toMatchSnapshot();
  });

  it("Working handler", () => {
    const { getByLabelText } = render(<TodoForm addTodo={handleTodoAdd} />);
    const input = getByLabelText('Type here your "to do"');
    expect(handleTodoAdd).toHaveBeenCalledTimes(0);
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(handleTodoAdd).toHaveBeenCalledTimes(1);
  });

  it("Setting and cleaning input", () => {
    const { getByLabelText } = render(<TodoForm addTodo={handleTodoAdd} />);
    const input = getByLabelText('Type here your "to do"');
    expect(input).toHaveValue("");
    userEvent.type(input, TASK_1.value);
    expect(input).toHaveValue(TASK_1.value);
    expect(handleTodoAdd).toHaveBeenCalledTimes(0);
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(handleTodoAdd).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("");
  });
});
