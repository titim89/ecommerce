import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../AsyncMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const {productId} = useParams()

    useEffect (() => {
        getProductsById(productId).then(response => {
            setProduct(response);
        })
    }, []);

    return (
        <div className='containerDetail'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;