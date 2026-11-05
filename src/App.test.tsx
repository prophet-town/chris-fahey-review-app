import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import App from "./App";

it("renders the review form and preview", () => {
  render(<App />);

  expect(screen.getByText("We'd love a review")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});
