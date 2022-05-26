import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../AsyncMock'



const ItemListContainer = (props) => {
    const [items, setItems] = useState([])

    useEffect (() => {
        getProducts().then(response => {
            setItems(response)
        })
    }, []);
    
    return (
        <div>
            <h1 style={{color: 'turquoise', margin: '20px'}}>{props.greeting}</h1>
            <div className='contenedorCards'>
                <ItemList products = {items}/>
            </div>
        </div>    
    )
}

export default ItemListContainer;