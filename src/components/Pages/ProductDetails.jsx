import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, getAllFavorites } from "../Utils";
import { addFavorite2, getAllFavorites2 } from "../Utils/Wishing";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setproducts] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false); // State for wishlist

  useEffect(() => {
    const findProduct = data.find((item) => item.product_id == product_id);
    setproducts(findProduct);

    const favorites = getAllFavorites();
    const wishlist = getAllFavorites2(); // Fetch wishlist items
    const isFavoriteProduct = favorites.find(
      (item) => item.product_id == findProduct.product_id
    );
    const isWishlistProduct = wishlist.find(
      (item) => item.product_id == findProduct.product_id
    );

    if (isFavoriteProduct) {
      setIsFavorite(true);
    }
    if (isWishlistProduct) {
      setIsWishlist(true);
    }
  }, [data, product_id]);

  const {
    product_title,
    product_image,
    price,
    rating,
    specification,
    description,
    availability,
  } = product;

  const handleFavorite = (product) => {
    addFavorite(product);
    setIsFavorite(true);
  };

  const handleWishlist = (product) => {
    addFavorite2(product);
    setIsWishlist(true); 
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white text-2xl h-96 pt-12">
        <h1>Product Details</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level.<br></br> From smart devices to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="card card-side bg-base-100 shadow-xl w-3/5 -mt-48 absolute ml-56 border">
        <figure>
          <img src={product_image} alt={product_title || "Product Image"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <p className="bg-[#7e6099] text-white rounded-3xl p-3 w-fit opacity-50">
            {availability ? "In stock" : "Not available"}
          </p>
          <p>{description}</p>
          <p>Specification</p>
          <ul className="ml-12">
            {specification &&
              specification.map((item, i) => (
                <li className="list-disc" key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <h1>Rating :{rating}</h1>
          <div className="card-actions">
            <Link to=''
              disabled={isFavorite}
              onClick={() => handleFavorite(product)}
              className="btn bg-[#9538E2] text-white"
            >
              {isFavorite ? "Added to Favorites" : "Add to Favorites"}{" "}
              <AiOutlineShoppingCart />
            </Link>

            <button
              disabled={isWishlist} 
              onClick={() => handleWishlist(product)}
              className="btn bg-[#9538E2] text-white rounded-full"
            >
              {isWishlist ? "Added to Wishlist" : "Add to Wishlist"} <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
