import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([{name:'agua',price:15,qty:3,id:99,foto:''}, 
    {name:'pepsi',price:15,qty:3,id:22,foto:''}])


    //funciones globales

    const addToCart = (item, qty) => {
        setCartList([
            ...cartList, 
            item]) //{array con todo}
    }
    // no tiene que duplicar objetos primero find y si no existe lo agrego sino le sumo la cant

    const clear = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let nuevoarray = cartList.filter(item => item.id != id)
        setCartList(nuevoarray)
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clear,deleteItem }}>
            {props.children}

        </CartContext.Provider>
    )
}

export default CartContextProvider;