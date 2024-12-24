import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'

const Product = ({ product,handleRemove  }) => {
  const { pathname } = useLocation()
  const { product_image, price, product_title, product_id } = product;
  return (
    <div className=" hover:scale-105">
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <Link
              to={`/product/${product_id}`}
              className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden p-3 border border-[#9538E2] text-[#9538E2]"
            >
              View Details
            </Link>
            {pathname === "/dashboard" && (
              <div
                onClick={() => handleRemove(id)}
                className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
              >
                <FaTrashAlt size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
