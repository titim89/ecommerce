import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Cart.css';
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';
import { fontSize } from "@mui/system";


const Cart = () => {

    const { cart, removeItem, cleanCart, getTotal, getQuantity } = useContext(CartContext)

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
            <div className="total">Total: ${getTotal()}</div>
            <div>
                <Button variant="outlined" color="secondary" onClick={() => cleanCart()} startIcon={<DeleteIcon />}>Vaciar</Button>
                <Button variant="outlined" color="secondary" component={Link} to="/" style={{textDecoration: "none", margin: "5px"}}>Seguir comprando</Button>
                <Button variant="outlined" color="secondary" endIcon={<SendIcon />}> Crear Orden</Button>
            </div>
        </div>
    )
}

export default Cart;