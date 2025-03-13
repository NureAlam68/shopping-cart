import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const Home = () => {
    const products = useSelector((state) => state.products);
    console.log(products)
    return (
        <div className='py-10'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    products.length ? products.map((product, idx) => (
                        <ProductCard key={idx} product={product}/>
                    )) : <p>No product found!</p>
                }
            </div>
        </div>
    );
};

export default Home;