import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Products from "../products/Products";

interface ProsType {
  orderType: string;
}
interface ItemType {
  name: string;
  imagePath: string;
}

const Type = ({ orderType }: ProsType) => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/${orderType}`);
        setItems(res.data);
      } catch (e) {
        if (e instanceof AxiosError) console.log(e);
      }
    };
    fetchApi();
  }, []);

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
