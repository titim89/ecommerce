import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../AsyncMock';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../AsyncMock';
import Spinner from 'react-bootstrap/Spinner'


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()


    useEffect (() => {

        setLoading(true)

        if(!categoryId) {
            getProducts().then(response => {
                setItems(response)
            }).catch (error => {
                alert('Error al cargar los productos')
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductByCategory(categoryId).then(response => {
                setItems(response)
            }).catch(error => {
                alert('Error al cargar los productos')
            }).finally(() => {
                setLoading(false)
            })
        }   
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