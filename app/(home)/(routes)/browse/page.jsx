"use client";
import React, { useEffect } from "react";
import CategoryFilter from "../../_components/CategoryFilter";
import { getCourseList } from "./../../../_services/index";

function Browse() {
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <h1>
        <CategoryFilter />
      </h1>
    </div>
  );
}

export default Browse;
