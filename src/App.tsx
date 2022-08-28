import React from "react";
import { OrderProvider } from "./orderTest/pages/orderPage/contexts/OrderContext";
import Order from "./orderTest/pages/orderPage/Order";

function App() {
  return (
    <div>
      <OrderProvider>
        <Order />
      </OrderProvider>
    </div>
  );
}

export default App;
