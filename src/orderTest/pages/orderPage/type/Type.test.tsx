import { screen, render } from "@testing-library/react";
import Type from "./Type";
import { server } from "../../../../mocks/server";
import { rest } from "msw";

test("display product images from server", async () => {
  render(<Type orderType="products" />);

  const productImages: HTMLImageElement[] = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((el) => el.alt);
  expect(altText).toEqual(["Americam product", "England product"]);
});

test("when fetching product dates, faces an error", async () => {
  server.resetHandlers(
    rest.get("http://localhost:5000/products", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("fetch options information from server", async () => {
  render(<Type orderType="options" />);

  const optionCheckboxes = await screen.findAllByRole("checkbox");
  expect(optionCheckboxes).toHaveLength(2);
});
