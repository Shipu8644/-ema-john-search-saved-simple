import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    //    UseEffect Zone
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProducts(data)
            })
    }, [])

    //Handler Zone
    const addToCartHandler = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const searchHandle = (event) => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(matchProduct);
        console.log(matchProduct.length);
    }


    return (
        <div>
            <div>
                <input
                    onChange={searchHandle}
                    className='inputStyle' type="text" placeholder='type here to search ' />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {searchProducts.map(product => <Product
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