import { useState, createContext} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const addItem = (productToAdd) => {
        
        if (cart.find((item) => item.id === productToAdd.id)) {
            const newCart = cart.map((item) => {
                if(item.id === productToAdd.id) {
                    return {...item, quantity: productToAdd.quantity}
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
        cart.forEach(item => {
            accu += item.quantity
        })

        return accu;
    }

    const getProduct = (id) => {
        return cart.find(item => item.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter (item => item.id !== id)
        setCart(newCart)
    }

    const cleanCart = () => {
        setCart ([])

    }

    const getTotal = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity * item.price
        })
        return total
    }

    
    return(
        <CartContext.Provider value={{cart, getQuantity, addItem, getProduct, removeItem, cleanCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;