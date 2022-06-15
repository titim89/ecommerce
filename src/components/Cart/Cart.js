import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css';
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { db, collectionRef } from "../../services/firebase";
import { Spinner } from "react-bootstrap";

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, removeItem, cleanCart, getTotal, getQuantity } = useContext(CartContext)

    
    const createOrder = () => {
        
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Pepe',
                email: 'pepe@hotmail.com',
                phone: '123456789',
                address: 'direccion 12345',
                comment: 'comentario'
            },
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(item => item.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'productStock')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(item => item.id === doc.id)?.quantity
                    
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')

                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({type: 'out_of_stock', products: outOfStock})
                }
                
            }).then(({id}) => {
                batch.commit()
                console.log(`el id de la orden es ${id}`)
                cleanCart()
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })    
    }

    if(loading) {
        return (
            <Spinner animation="grow" role="status" className='spinner'></Spinner>
        )
    }
    

    if(getQuantity() === 0){
        return (
            <div>
                <p style={{margin: "40px", fontSize: "3rem"}}>No hay productos en el carrito</p>
                <Button variant="outlined" color="secondary" component={Link} to="/" style={{textDecoration: "none", margin: "5px"}}>Ver productos</Button>
            </div>
        )
    }
    
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
            <h1 style={{margin: "40px"}}>Cart</h1>
            <div style={{display: "flex", flexDirection: "column",justifyContent: "center", width: "1000px"}}>
                {cart.map(item => {
                    return(
                        <div key={item.id} className="cartContainer">
                            <img src={item.img} alt='Imagen del producto'></img>
                            <div>Producto: {item.name}</div>
                            <div>Precio: ${item.price}</div>
                            <div>Cantidad: {item.quantity}</div>
                            <div>Subtotal: ${item.quantity*item.price}</div>
                            <IconButton aria-label="delete" onClick={() => removeItem(item.id)}>
                                <DeleteIcon />
                            </IconButton>  
                        </div>
                    )
                })}
            </div>
            <div className="total" style={{fontWeight: "bold"}}>Total: ${getTotal()}</div>
            <div>
                <Button variant="outlined" color="secondary" onClick={() => cleanCart()} startIcon={<DeleteIcon />}>Vaciar</Button>
                <Button variant="outlined" color="secondary" component={Link} to="/" style={{textDecoration: "none", margin: "5px"}}>Seguir comprando</Button>
                <Button variant="outlined" color="secondary" onClick={createOrder} endIcon={<SendIcon />}> Crear Orden</Button>
            </div>
        </div>
    )
}

export default Cart;