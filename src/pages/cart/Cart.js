import React from 'react';
import CartTop from './CartTop/CartTop';
import CartMainOrder from './CartMainOrder/CartMainOrder';

const Cart = () => {
    return (
        <div>
            <CartTop></CartTop>
            <CartMainOrder></CartMainOrder>
        </div>
    );
};

export default Cart;