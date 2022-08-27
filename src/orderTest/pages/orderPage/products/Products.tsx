import React from "react";

interface PropsType {
  name: string;
  imagePath: string;
}

const Products = ({ name, imagePath }: PropsType) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5000/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label htmlFor="">{name}</label>
        <input type="number" name="quantity" min="0" defaultValue={0} />
      </form>
    </div>
  );
};

export default Products;
