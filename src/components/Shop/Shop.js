import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);

    const AddToCartHndle = (product) =>{
        console.log(product);
        const NewCart = [...cart,product];
        setCart(NewCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product 
                    key={product.id}
                    product = {product}
                    AddToCartHndle ={AddToCartHndle}
                    ></Product>)
               }
            </div>
            <div className="cart-container">
                <h4>Order summery</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
           
        </div>
    );
};

export default Shop;