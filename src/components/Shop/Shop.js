import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //    UseEffect Zone
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //Handler Zone
    const addToCartHandler = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {products.map(product => <Product
                        key={product.key}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    >
                    </Product>)}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;