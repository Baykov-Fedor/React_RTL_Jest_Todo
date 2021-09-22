import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TodoPage from "../pages/TodoPage";
import { TASK_1, TASK_2 } from "../constants/constants";
import userEvent from "@testing-library/user-event";

describe("Todo Page", () => {
  it("Renders todo page", () => {
    const { getByText } = render(<TodoPage />);
    const emptyList = getByText(/Пока дел нет/i);
    expect(emptyList).toBeInTheDocument();
  });

  it("Working handleAdding", () => {
    const { getByLabelText, getByText } = render(<TodoPage />);
    const input = getByLabelText('Type here your "to do"');
    userEvent.type(input, TASK_1.value);
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(input).toHaveValue("");
    const list_item = getByText(TASK_1.value);
    expect(list_item).toBeInTheDocument();
  });

  it("Working handle toogling", () => {
    const { getByLabelText, getAllByRole } = render(<TodoPage />);
    const input = getByLabelText('Type here your "to do"');
    userEvent.type(input, TASK_2.value);
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    const list_item = getAllByRole("listitem");
    expect(list_item[list_item.length - 1].className).toEqual("todo");
    const checkbox = getAllByRole("checkbox");
    userEvent.click(checkbox[checkbox.length - 1]);
    expect(list_item[list_item.length - 1].className).toEqual("todo completed");
  });

  it("Working remove handler", () => {
    const { getAllByText, getAllByRole } = render(<TodoPage />);
    const deleteIcon = getAllByText("delete");
    const listItems = getAllByRole("listitem");
    window.confirm = jest.fn(() => true);

    expect(listItems.length).toEqual(2);
    userEvent.click(deleteIcon[0]);
    expect(window.confirm).toBeCalledTimes(1);
    const newListItems = getAllByRole("listitem");
    expect(newListItems.length).toEqual(1);

    const newDeleteIcon = getAllByText("delete");
    window.confirm = jest.fn(() => false);
    userEvent.click(newDeleteIcon[0]);
    expect(window.confirm).toBeCalledTimes(1);
    expect(newListItems.length).toEqual(1);
  });
});
