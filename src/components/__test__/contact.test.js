import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUS page test Case", () => {
  test("Check 2 inputs are in contactus page", () => {
    render(<ContactUs />);
    const inputTextbox = screen.getAllByRole("textbox");
    expect(inputTextbox.length).toBe(2);
  });
});
test("Check contactus page render or not", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Check button is reder in contactus page", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
