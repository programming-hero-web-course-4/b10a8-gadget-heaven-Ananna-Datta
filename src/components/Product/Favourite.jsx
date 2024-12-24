import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Favourite = ({ product, handleRemove }) => {
  const { pathname } = useLocation()
  const { product_image, price, product_title, description, product_id } =
    product;
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <div className="card card-side bg-base-100 shadow-xl m-7">
          <figure>
            <img className="w-80" src={product_image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{product_title}</h2>
            <p>{description}</p>
            <p className="items-start">Price: ${price}</p>
        
        {pathname === '/dashboard/wishlist' && (
        <Link
        to={`/product/${product_id}`} className="border px-6 py-3 w-fit rounded-3xl bg-[#9538E2] text-white">Add to card</Link>
      )}
        
          </div>
          <div onClick={() => handleRemove(product_id)} className="pt-24 pr-7">
            <RxCross1 size={20} />
          </div>
        </div>
      </div>
    </div>
    // <div className="card lg:card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img className="w-80" src={product_image} alt="Album" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title text-2xl font-bold">{product_title}</h2>
    //     <p>{description}</p>
    //     <p>Price: ${price}</p>
    //   </div>
    // </div>
  );
};
export default Favourite;
