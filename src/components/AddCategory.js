import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setCategories((lastCategories) => [inputValue, ...lastCategories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handledSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
