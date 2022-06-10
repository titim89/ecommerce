import './ItemCount.css';
import { useState } from 'react';
import { Button } from '@mui/material';

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
                <Button variant="outlined" color="secondary" onClick={decrement}>-</Button>
                <p>{quantity}</p>
                <Button variant="outlined" color="secondary" onClick={increment}>+</Button>
            </div>
            <Button variant="outlined" color="secondary" onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
        </div>      
    )   
}


export default ItemCount;