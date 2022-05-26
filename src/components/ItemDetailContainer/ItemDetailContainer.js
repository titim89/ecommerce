import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../AsyncMock';
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    useEffect (() => {
        getProductsById(2).then(response => {
            setProduct(response);
        })
    }, []);
    
    return (
        <div>
            <ItemDetail {...product}/>   
        </div>    
    )   
}

export default ItemDetailContainer;