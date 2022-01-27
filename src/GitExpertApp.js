import React, { useEffect, useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    "Seven Deadly Sins",
    // "One Punch",
    // "Samurai X",
  ]);

  //   const handlerAdd = () => {
  //     setCategories([...categories, "Sword Art Online"]);
  //     // setCategories((categ) => [...categ, "Sword Art Online"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handlerAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          // <li key={category}>{category} </li>
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
