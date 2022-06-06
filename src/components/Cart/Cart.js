import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const { cart } = useContext(CartContext)
    
    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(element => {
                    return(
                        <div>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;