import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minusBtn");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plusBtn");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plusBtn");
  fireEvent.click(plusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minusBtn");
  fireEvent.click(minusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("onOffBtn");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -, + button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("onOffBtn");
  fireEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId("plusBtn");
  expect(plusButtonElement).toBeDisabled();
});
