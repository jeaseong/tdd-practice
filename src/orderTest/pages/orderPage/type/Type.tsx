import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
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

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/${orderType}`);
        setItems(res.data);
      } catch (e) {
        if (e instanceof AxiosError) console.log(e);
        setError(true);
      }
    };
    fetchApi();
  }, []);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  if (orderType === "products") {
    return (
      <>
        {items.map((item) => (
          <Products
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        ))}
      </>
    );
  }

  return <div></div>;
};

export default Type;
