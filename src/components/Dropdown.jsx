import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { categories } from "./Categories";

const Dropdown = ({ setSelectedCategory }) => {
  const [selectedCategory, setCategory] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="dropdown">
      <span className="text">Categories</span>
      <div className="dropdown-element">
        <select name="categories" id="cat" onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
