import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const { name, seller, price, stock, img, star } = props.product;

    const element = <FontAwesomeIcon icon={faShoppingCart} />

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
                <Rating className='rating-style' initialRating={star}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star "
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.addToCartHandler(props.product)}
                    className='btn-regular'>{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;