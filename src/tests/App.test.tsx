import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });

  it("should routing through pages", () => {
    const { container, getByText } = render(<App />);
    userEvent.click(getByText(/about page/i));
    expect(container.innerHTML).toMatch(/information page/i);
  });
});
