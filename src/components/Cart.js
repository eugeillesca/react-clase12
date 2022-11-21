import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const {cartList, clear} = useContext(CartContext)
    return (
        <h>
            <div>
                soy el carrito
            </div>
            { cartList.length === 0 
            ? <span>El carrito esta vacio</span>
            : cartList.map(item => <div>{item.name} - {item.price} - {item.qty}</div>)}

            <button onClick={clear}>borrar</button>
        </h>
    );
};

export default Cart;