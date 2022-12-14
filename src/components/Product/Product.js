import React from 'react';
import './Product.css';

const Product = (props) => {
    
    const {name, img, seller, price,ratings} = props.product;

    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
           </div>
           <button onClick={ () =>props.AddToCartHndle(props.product)} className='btn-cart'>
                <p>Add to cart</p>
           </button>
        </div>
    );
};

export default Product;