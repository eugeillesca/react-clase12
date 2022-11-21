//mostrar vista de detalle de un item : descripcion + foto + precio
import React, { useContext }  from 'react';
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';

//agregar addCart()



const ItemDetail = ({item}) => {

    
    const {addToCart} = useContext(CartContext)

    // const onAdd = (qty) => {
    //     addToCart(item)
    // }
    //const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        //setItemCount(qty);
        addToCart(item, qty)
    }

    return (
        <>
        <h1>{item.name}</h1>
        <div className='tab-contenedor'>
            <div className='tab-prod'>
                <img src={item.image} alt="" />
            </div>
            <div className='tab-prod'>
                <div>
                    
                    <p>{item.description}</p>
                    <div>
                        <h3>$ {item.price}</h3>
                        <h5>Stock: {item.available_quantity}</h5>

                    </div>
                    <ItemCount key={item.id} available_quantity={item.available_quantity} onAdd={onAdd}/>
                </div>
                
            </div>
        </div>
        </>

    );
};

export default ItemDetail;