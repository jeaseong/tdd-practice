import { render } from "@testing-library/react";
import { OrderProvider } from "../pages/orderPage/contexts/OrderContext";

const customRender = (ui: JSX.Element, options?: any) => {
  render(ui, { wrapper: OrderProvider, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
