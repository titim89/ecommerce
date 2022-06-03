import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, onAdd, initial=1}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count >= 1 && stock>count) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const AgregarAlCarrito = () => {
        onAdd(count)
    }

    return (
        
        <div className='contenedorBotones'>
            <div className='contenedorCount'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={AgregarAlCarrito}>Agregar al carrito</button>
        </div>      
    )   
}


export default ItemCount;