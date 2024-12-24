import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Category from "../Category/Category";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const data = useLoaderData()
  const { category } = useParams()
  const [products, setproducts] = useState([])
  // console.log(category)
  
  useEffect(()=>{
    if (category) {
        const filteredByCategory = [...data].filter(
          product => product.category === category
        )
        setproducts(filteredByCategory)
      }
    else{
      setproducts(data);
    }
},[category,data])



  return (
    <div>
      <div className="max-w-7xl mx-auto flex mt-7 gap-2 ">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content transition ">
          {products.map((product) => (
            <Product product={product} key={product.product_id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
