import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import Spinner from '../Spinner/Spinner';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect (() => {
        getDoc(doc(db, 'productStock', productId)).then(response => {
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId]);

    if(loading) {
        return (
          <Spinner />
        )
      }

    return (
        <div className='containerDetail'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;