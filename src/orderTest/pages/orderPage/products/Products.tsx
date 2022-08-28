import React from "react";

interface PropsType {
  name: string;
  imagePath: string;
  updateItemCounts: (itemName: string, newItemCount: number) => void;
}

const Products = ({ name, imagePath, updateItemCounts }: PropsType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = +e.target.value;
    updateItemCounts(name, currentValue);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
