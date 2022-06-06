import { useState, createContext} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (cart.find((item) => item.id === productToAdd.id)) {
            const newCart = cart.map((item) => {
                if(item.id === productToAdd.id) {
                    return {...item, quantity: productToAdd.quantity + item.quantity}
                }
                return item
            })
            setCart(newCart)
        } else {
            setCart((newProduct) => {
                return [...newProduct, productToAdd]
            })
        }  
    }

    const getQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu;
    }

    return(
        <CartContext.Provider value={{cart, getQuantity, addItem}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;