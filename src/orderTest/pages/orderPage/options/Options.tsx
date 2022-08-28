import React from "react";
interface PropsType {
  name: string;
  updateItemCounts: (itemName: string, newItemCount: number) => void;
}
const Options = ({ name, updateItemCounts }: PropsType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentChecked = e.target.checked ? 1 : 0;
    updateItemCounts(name, currentChecked);
  };
  return (
    <form>
      <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
