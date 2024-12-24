import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  console.log(category);
  return (
    <div className="flex flex-col ml-28 p-9 rounded-3xl gap-3 bg-[#FFFFFF] border shadow-xl ">
      <button>All Category</button>
      {category.map(category => (
        <NavLink key={category.category} to={`category/${category.category}`} role="tab" className={({ isActive }) =>
           isActive ? "btn btn-primary rounded-3xl" : "text-black btn rounded-3xl"
        }>
          
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
