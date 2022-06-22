import { useState } from "react";
import { useForm } from "react-hook-form";
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import './Form.css';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const Form = () => {
  const { register, handleSubmit } = useForm();
  const { createOrder } = useContext(CartContext)
  const onSubmit = data => console.log(data);
  
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    email: '',
    telefono: '',
    comentario: ''
  })

  
  return (
    <div>
      <div>
        <h2>Complete el formulario para finalizar la compra</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input 
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            {...register("name", { required: true, maxLength: 80})} 
             />
          <input 
            type="text"
            name="apellido"
            placeholder="Ingrese su apellido"
            {...register("apellido", { required: true, maxLength: 80 })} 
             />  
          <input
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
          <input 
            type="text"
            name="comentario"
            placeholder="ingrese informacion extra que crea necesaria"
            {...register("comentario")} 
             />  
          <Button className="button" variant="outlined" color="secondary" onClick={createOrder} endIcon={<SendIcon />}> Crear Orden</Button>
        </form>
      </div>
    </div>  
  );
}

export default Form
