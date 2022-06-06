import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to={'/cart'} className="imgCarrito">
            <img src="../images/carrito.png" alt="imagen de carrito" />
            {quantity}
        </Link>        
    )
}

export default CartWidget;