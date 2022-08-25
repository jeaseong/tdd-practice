import { screen, render } from "@testing-library/react";
import Summary from "../Summary";

test("checkbox and button", () => {
  render(<Summary />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox).not.toBeChecked();
  const confirmBtn = screen.getByRole("button", {
    name: "주문 확인",
  });
  expect(confirmBtn).toBeDisabled();
});
