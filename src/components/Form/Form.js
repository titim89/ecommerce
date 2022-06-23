import { useState } from "react";
import { useForm } from "react-hook-form";
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import './Form.css';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Form = () => {
  
  const { cart, cleanCart, getTotal } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [buyer, setBuyer] = useState({
    name: '',
    surname: ''
  })

  const createOrder = () => {
        
    setLoading(true)
    
    const objOrder = {
        buyer,
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
            navigate('/')
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })    
  }
  
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target
    setBuyer((buyer) => {
        return { ...buyer, [name]: value }
    })
}

  if(loading) {
    return (
        <Spinner animation="grow" role="status" className='spinner'></Spinner>
    )
  }

  
  return (
    <div>
      <div>
        <h2>Complete el formulario para finalizar la compra</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input 
            type="text" 
            name="name"
            value={buyer.name}
            placeholder="Ingrese su nombre"
            {...register("name", { required: true, maxLength: 80})}
            onChange={handleChange} 
             />
          <input 
            type="text"
            name="surname"
            value={buyer.surname}
            placeholder="Ingrese su apellido"
            {...register("surname", { required: true, maxLength: 80 })} 
            onChange={handleChange}
             />  
          {/* <input
            type="email"
            name="email" 
            placeholder="example@example.com"
            {...register("email", { required: true })} 
             />
          <input 
            type="text"
            name="direccion"
            placeholder="ingrese su direccion"
            {...register("direccion", { required: true })} 
            />
          <input 
            type="number"
            name="telefono"
            placeholder="ingrese su numero de telefono"
            {...register("telefono", { required: true })} 
             /> 
          <textarea
            type="text"
            name="comentario"
            placeholder="ingrese informacion extra que crea necesaria"
            {...register("comentario")} 
             />   */}
          <Button className="button" variant="outlined" color="secondary" onClick={createOrder} endIcon={<SendIcon />}> Crear Orden</Button>
        </form>
      </div>
    </div>  
  );
}

export default Form
