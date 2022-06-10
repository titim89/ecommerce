import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = (props) => {
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
            <Spinner animation="grow" role="status" className='spinner'></Spinner>
        )
    }
    
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