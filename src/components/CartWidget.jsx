import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src="https://cdn-icons-png.freepik.com/512/1413/1413908.png" alt="Cart" className="cart-icon" />
            <span className="cart-count">5</span> 
        </div>
    );
}

export default CartWidget;