import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Products from '../Products/Products';

const Home = () => {
    const category = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className="font-bold text-4xl text-center">Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-4'>
            <div className='w-3/12 rounded-3xl pt-10 items-center text-center'>
                <Category category={category}></Category>         
            </div> 
            <div className='w-9/12'>
                <Outlet></Outlet>
            </div> 
            </div>        
        </div>
    );
};

export default Home;