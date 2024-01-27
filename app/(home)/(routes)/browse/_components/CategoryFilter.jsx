"use client";
import React, { useState } from "react";

function CategoryFilter({ selectedCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Reactjs",
      value: "reactjs",
    },
    {
      id: 2,
      name: "Nextjs",
      value: "nextjs",
    },
    {
      id: 4,
      name: "React Native",
      value: "react_native",
    },
    {
      id: 5,
      name: "Tailwind Css",
      value: "tailwindcss",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          key={index}
          className={`border p-2 px-4 text-[12px] rounded-md hover:border-purple-800 font-semibold ${
            activeIndex == index
              ? "border-purple-800 bg-purple-50  text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
