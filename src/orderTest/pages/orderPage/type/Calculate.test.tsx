import { render, screen } from "../../../utils/test-util";
import userEvent from "@testing-library/user-event";
import Type from "./Type";

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한 개 올리기
  // 서버에서 받아오기 때문에 findByRole
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  userEvent.clear(americaInput);
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});

test("update option's total when options change", async () => {
  render(<Type orderType="options" />);
  const optionsTotal = screen.getByText("옵션 총 가격", { exact: false });
  expect(optionsTotal).toHaveTextContent("0");

  const insuranceCheckBox = await screen.findByRole("checkbox", {
    name: "Insurance",
  });
  userEvent.click(insuranceCheckBox);
  expect(optionsTotal).toHaveTextContent("500");

  const dinnerCheckBox = await screen.findByRole("checkbox", {
    name: "Dinner",
  });
  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent("1000");

  userEvent.click(dinnerCheckBox);
  expect(optionsTotal).toHaveTextContent("500");
});
