import { useState, useEffect, useContext } from "react";
import axios, { AxiosError } from "axios";
import { OrderContext } from "../contexts/OrderContext";
import Products from "../products/Products";
import Options from "../options/Options";
import ErrorBanner from "../../../components/ErrorBanner";

interface ProsType {
  orderType: "products" | "options";
}
interface ItemType {
  name: string;
  imagePath: string;
}

const Type = ({ orderType }: ProsType) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCounts] = useContext(OrderContext);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/${orderType}`);
        setItems(res.data);
      } catch (e) {
        if (e instanceof AxiosError) console.log(e);
        setError(true);
      }
    };
    fetchApi();
  }, [orderType]);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  if (orderType === "products") {
    return (
      <>
        <h2>주문 종류</h2>
        <p>하나의 가격</p>
        <p>상품 총 가격: {orderDatas.totals[orderType]}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item) => (
            <Products
              key={item.name}
              name={item.name}
              imagePath={item.imagePath}
              updateItemCounts={(itemName: string, newItemCount: number) =>
                updateItemCounts({ itemName, newItemCount, orderType })
              }
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>옵션 총 가격: {orderDatas.totals[orderType]}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items.map((item) => (
          <Options
            updateItemCounts={(itemName: string, newItemCount: number) =>
              updateItemCounts({ itemName, newItemCount, orderType })
            }
            key={item.name}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Type;
