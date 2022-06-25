import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ImgByCategory from './ImgByCategory';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()


    useEffect (() => {
        setLoading(true)

        const collectionRef = categoryId
        
        ? query(collection(db, 'productStock'), where('category', '==', categoryId))
        : collection(db, 'productStock')

        getDocs(collectionRef).then(response => {
            const productStock = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItems(productStock)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]);

    if(loading) {
        return (
          <Spinner />
        )
      }
    
    return (
        <div>
            <div>
                <ImgByCategory imgCategory={categoryId}/>
            </div>
            <div className='contenedorCards'>
                <ItemList products = {items}/>
            </div>
        </div>    
    )
}

export default ItemListContainer;