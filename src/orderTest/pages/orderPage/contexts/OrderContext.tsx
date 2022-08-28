import React, { createContext, useMemo, useState, useEffect } from "react";

interface ContextType {
  products: Map<string, number>;
  options: Map<string, number>;
}
// Map 형식의 타입을 어떻게 지정하냐

interface PropsType {
  children: React.ReactNode;
}

interface ItemProps {
  itemName: string;
  newItemCount: number;
  orderType: "products" | "options";
}

export const OrderContext = createContext<any>(null);

const pricePerItem = {
  products: 1000,
  options: 500,
};

const calculateSubtotal = (
  orderType: "products" | "options",
  orderCounts: any
) => {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }
  return optionCount * pricePerItem[orderType];
};

export const OrderProvider = ({ children }: PropsType) => {
  const [orderCounts, setOrderCounts] = useState<ContextType>({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  useEffect(() => {
    const productTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productTotal + optionsTotal;
    setTotals({
      products: productTotal,
      options: optionsTotal,
      total: total,
    });
  }, [orderCounts]);

  const store = useMemo(() => {
    const updateItemCount = ({
      itemName,
      newItemCount,
      orderType,
    }: ItemProps) => {
      const newOrderCounts = { ...orderCounts };
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, newItemCount);

      setOrderCounts(newOrderCounts);
    };
    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);
  return (
    <OrderContext.Provider value={store}>{children}</OrderContext.Provider>
  );
};
