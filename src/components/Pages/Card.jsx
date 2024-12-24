import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllFavorites, removeFavorite } from '../Utils';
import Favourite from '../Product/Favourite';

const Card = () => {
    const location = useLocation();
    console.log(location.pathname);
    
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(0);
    const [isAscending, setIsAscending] = useState(false);
    
    useEffect(() => {
        const favorites = getAllFavorites();
        setProduct(favorites);
        calculateTotalPrice(favorites);
    }, []);
    
    const handleRemove = (product_id) => {
        removeFavorite(product_id);
        const favorites = getAllFavorites();
        setProduct(favorites);
        calculateTotalPrice(favorites);
    };

    const calculateTotalPrice = (products) => {
        const total = products.reduce((sum, product) => sum + product.price, 0);
        setPrice(total);
    };

    const handleSort = () => {
        const sortedProducts = [...product].sort((a, b) => {
            if (isAscending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setProduct(sortedProducts);
        setIsAscending(!isAscending);
    };

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-3xl'>Cart</h1>
                <div className='flex text-2xl'>
                    <h1>Price: ${price}</h1>
                    <button className='border rounded-3xl mx-9 px-7 py-2 bg-[#9538E2] text-white' onClick={handleSort}>
                        Sort by price {isAscending ? '↓' : '↑'}
                    </button>
                </div>
            </div>
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

export default Card;
