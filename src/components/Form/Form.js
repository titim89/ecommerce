import { useState } from "react";
import { useForm } from "react-hook-form";
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import './Form.css';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



const Form = () => {
  
  const { cart, cleanCart, getTotal } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  
  const [buyer, setBuyer] = useState({
    name: '',
    surname: '',
    email: '',
    repeatEmail: '',
    address: '',
    phone: '',
    comment: ''
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
            cleanCart()
            navigate('/')
            Swal.fire({
              icon: 'success',
              title: 'La compra se realizo con exito',
              text: `El id de la orden es: ${id}`,
            })
            
        }).catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tenemos suficiente stock',
          })
        }).finally(() => {
            setLoading(false)
        })    
  }

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target
    setBuyer((buyer) => {
        return { ...buyer, [name]: value }
    })
  }

  if(loading) {
    return (
      <Spinner />
    )
  }
  
  return (
    <div>
      <div>
        <h2>Complete el formulario para finalizar la compra</h2>
        <form onSubmit={handleSubmit(createOrder)} >
          <label>Nombre:</label>
          <input
            type="text" 
            name="name"
            value={buyer.name}
            placeholder="Ingrese su nombre"
            {...register("name", { required: true, maxLength: 80})}
            onChange={handleChange} 
             />
          <label>Apellido:</label>   
          <input 
            type="text"
            name="surname"
            value={buyer.surname}
            placeholder="Ingrese su apellido"
            {...register("surname", { required: true, maxLength: 80 })} 
            onChange={handleChange}
             />
          <label>Mail:</label>     
          <input
            type="email"
            name="email"
            value={buyer.email} 
            placeholder="example@example.com"
            {...register("email", { required: true })}
            onChange={handleChange} 
             /> 
          <label>Repetir Mail:</label>     
          <input
            type="email"
            name="repeatemail"
            value={buyer.repeatEmail} 
            placeholder="example@example.com"
            {...register("repeatEmail", { required: true })}
            onChange={handleChange} 
             />  
          <label>Direccion:</label>   
          <input 
            type="text"
            name="address"
            value={buyer.address}
            placeholder="ingrese su direccion"
            {...register("address", { required: true })}
            onChange={handleChange} 
            />
          <label>Telefono:</label>
          <input 
            type="tel"
            name="phone"
            value={buyer.phone}
            pattern="[0-9]{10}"
            placeholder="ingrese su numero de telefono"
            {...register("phone", { required: true })} 
            onChange={handleChange}
             /> 
          <label>Comentario:</label>
          <textarea
            type="text"
            name="comment"
            value={buyer.comment}
            placeholder="ingrese informacion extra que crea necesaria"
            {...register("comment")}
            onChange={handleChange} 
             />  
            <Button type="submit" className="button" variant="outlined" color="secondary" endIcon={<SendIcon />}> Finalizar compra</Button>  
        </form>
      </div>
    </div>  
  );
}

export default Form
