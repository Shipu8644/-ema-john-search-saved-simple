import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const orderTotal = total + shipping + tax;
    return (
        <div>
            <div className="cart">
                <h2 style={{ marginLeft: '100px' }}>Order Summary</h2>
                <br />
                <p style={{ marginLeft: '120px', fontSize: '1.2em' }}>Items Ordered: {cart.length}</p>
                <div className="cart-calculation">
                    <p>Total price</p>
                    <p>: <strong>${total.toFixed(2)}</strong></p>
                    <p>Shipping</p>
                    <p>: <strong>${shipping}</strong></p>
                    <p>Tax</p>
                    <p>: <strong>${tax.toFixed(2)}</strong></p>
                    <p>Order Total</p>
                    <p>: <strong>${orderTotal.toFixed(2)}</strong></p>
                </div>

            </div>

        </div>
    );
};

export default Cart;