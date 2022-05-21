import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0 && stock>count) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        
        <div className='contenedorBotones'>
            <button onClick={decrement}>-</button>
            <p>Comprar {count}</p>
            <button onClick={increment}>+</button>
        </div>      
    )   
}


export default ItemCount;