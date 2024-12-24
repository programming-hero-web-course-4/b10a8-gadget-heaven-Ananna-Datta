import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllFavorites, removeFavorite } from '../Utils';
import Favourite from '../Product/Favourite';
import { getAllFavorites2, removeFavorite2 } from '../Utils/Wishing';

const Wishlist = () => {
    const location = useLocation();
  console.log(location.pathname);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites2();
    setproduct(favorites);
  }, []);

  const handleRemove = (product_id) => {
    removeFavorite2(product_id);
    const favorites = getAllFavorites2();
    setproduct(favorites);
  };
    return (
        <div>
            {product.map((product) => (
          <Favourite
            handleRemove={handleRemove}
            key={product.product_id}
            product={product}
          />
        ))}
        </div>
    );
};

export default Wishlist;