import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { randomElement } from "./helpers";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([randomElement()]);
  const onAddCategory = (newValue) => {
    if (!categories.includes(newValue)) {
      setCategories([newValue, ...categories]);
    };
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map(category => (<GifGrid key={category} category={category} />))}
    </>
  );
};