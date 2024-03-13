import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { categories } from "./Categories";

const Dropdown = ({ setSelectedCategory }) => {
  const [selectedCategory, setCategory] = useState("Love");

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="dropdown">
      <span className="text">Categories</span>
      <div className="dropdown-element">
        <select
          name="categories"
          id="cat"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
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
