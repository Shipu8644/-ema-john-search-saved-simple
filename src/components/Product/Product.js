import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { name, seller, price, stock, img } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: <strong>${price}</strong> </p>
                <p>only {stock} left in stock - order soon</p>
                <button
                    onClick={() => props.addToCartHandler(props.product)}
                    className='btn-regular'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;