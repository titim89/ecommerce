import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../AsyncMock'



const ItemListContainer = (props) => {
    const [item, setItem] = useState([])

    useEffect (() => {
        getProducts().then(response => {
            setItem(response)
        })
    }, []);
    
    return (
        <div>
            <h1 style={{color: 'turquoise', margin: '20px'}}>{props.greeting}</h1>
            <div className='contenedorCards'>
                <ItemList products = {item}/>
            </div>
        </div>    
    )
}

export default ItemListContainer;