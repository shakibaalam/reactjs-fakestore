import React from 'react';
import SlideModal from '../Modal/SlideModal';
import "./Product.css"

const Product = (props) => {
    const { setCartCount } = props;
    const { image, title } = props.product
    return (
        <div className='col'>
            <div className='card h-100 style'>
                <img src={image} className="card-img-top w-50 m-auto mt-5 mb-3" alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                </div>
                <div className='card-footer d-flex justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    <SlideModal product={props.product}></SlideModal>
                </div>
            </div>
        </div>
    );
};

export default Product;