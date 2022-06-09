import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, onAdd, initial=1}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        
        <div className='contenedorBotones'>
            <div className='contenedorCount'>
                <button onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>      
    )   
}


export default ItemCount;