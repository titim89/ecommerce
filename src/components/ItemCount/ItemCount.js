import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div style={{background: 'gray'}}>
            <img src='../images/cheesecake.jpg' alt='cheesecake'></img>
            <h2>Cheesecake</h2>
            <p>$3500</p>
            <div className='contenedorBotones'>
                <button onClick={decrement}>-</button>
                <p>Comprar</p>
                <button onClick={increment}>+</button>
            </div>
            <h1>{count}</h1>
        </div>
    )   
}


export default ItemCount;