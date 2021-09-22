import React from "react";
import { render } from "@testing-library/react";
import InfoPage from "../pages/InfoPage";

describe("Info Page", () => {
  it("renders info page", () => {
    const { getByText } = render(<InfoPage />);
    expect(getByText(/This is information page/i)).toBeTruthy();
  });
});
