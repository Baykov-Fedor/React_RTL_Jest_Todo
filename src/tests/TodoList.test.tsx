import React from "react";
import { render } from "@testing-library/react";

import { TASK_1, TASK_2 } from "../constants/constants";
import { TodoList } from "../components/TodoList";
import userEvent from "@testing-library/user-event";

const emptyProps = {
  todos: [],
  onRemove: () => "",
  onToggle: () => "",
};

const twoTasksProps = {
  todos: [TASK_1, TASK_2],
  onRemove: jest.fn(),
  onToggle: jest.fn(),
};

describe("Todo List", () => {
  it("Renders empty list", () => {
    const { getByText } = render(<TodoList {...emptyProps} />);
    const emptyList = getByText(/Пока дел нет/i);
    expect(emptyList).toBeInTheDocument();
  });

  it("Renders list", () => {
    const { getByText } = render(<TodoList {...twoTasksProps} />);
    const firstTaks = getByText(TASK_1.value);
    expect(firstTaks).toBeInTheDocument();
    const secondTask = getByText(TASK_2.value);
    expect(secondTask).toBeInTheDocument();
  });

  it("Working toogle prop", () => {
    const { getAllByRole } = render(<TodoList {...twoTasksProps} />);
    const checkboxes = getAllByRole("checkbox");
    expect(twoTasksProps.onToggle).toHaveBeenCalledTimes(0);
    userEvent.click(checkboxes[0]);
    expect(twoTasksProps.onToggle).toHaveBeenCalledTimes(1);
  });

  it("Working remove prop", () => {
    const { getAllByText } = render(<TodoList {...twoTasksProps} />);
    const deleteIcon = getAllByText("delete");
    expect(twoTasksProps.onRemove).toHaveBeenCalledTimes(0);
    userEvent.click(deleteIcon[0]);
    expect(twoTasksProps.onRemove).toHaveBeenCalledTimes(1);
  });
});
