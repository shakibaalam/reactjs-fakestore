import React, { useEffect, useState } from 'react';
import Product from '../Single-Product/Product';
import "./AllProduct.css"

const AllProducts = ({ setCartCount }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container'>
            <h1 className='mb-5'>Our Special Products</h1>
            <div className='row row-cols-1 row-cols-md-3 g-5'>
                {
                    products.map(pd => <Product setCartCount={setCartCount} key={pd.id} product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;