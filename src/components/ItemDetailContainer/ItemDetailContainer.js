import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [leading, setLeading] = useState(true)

    const {productId} = useParams()

    useEffect (() => {
        getDoc(doc(db, 'productStock', productId)).then(response => {
            console.log(response)
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLeading(false)
        })
    }, [productId]);

    return (
        <div className='containerDetail'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;