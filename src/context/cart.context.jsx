import { createContext, useState, useEffect } from "react";

const addItemToCart = (itemToAdd, itemsInCart) => {
    const existingItem = itemsInCart.find((item)=> item.id ===itemToAdd.id);
    if(existingItem){
       return itemsInCart.map((item) => item.id == itemToAdd.id ?
        {...item, quantity: item.quantity +1} : item
        )
    }
    return [...itemsInCart, {...itemToAdd, quantity: 1}]
}

const deleteItemFromCart = ((itemToDelete, itemsInCart) => {
    return itemsInCart.filter((item) => item.id !== itemToDelete.id)
})

const removeItemFromCart = ((itemToRemove, cartItems)=> {
    if(itemToRemove.quantity >= 2){
        return cartItems.map((item) => item.id === itemToRemove.id ?
        {...item, quantity: item.quantity -1} : item
        )
    }
    return cartItems.filter((item)=> item.id !== itemToRemove.id)
})
export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItem: () => {},
    cartCount: 0,
    deleteItem: () => {},
    // setCartCount: () =>{},
    total: 0,
    // setTotal: () =>{},
    removeItem: () => {},
})

export const CartContextProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState([])
    const [total, setTotal] = useState([]);

    useEffect(() => {
        const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCount);
    },[cartItems])

    useEffect(() =>{
        const total = cartItems.reduce((total, item) => total + (+item.price * item.quantity), 0);
        setTotal(total);
    }, [cartItems])

    const addItem = (item) => {
        setCartItems(addItemToCart(item, cartItems));
    }

    const deleteItem = (item) => {
        setCartItems(deleteItemFromCart(item, cartItems));
    }
    const removeItem = (item) => {
        setCartItems(removeItemFromCart(item, cartItems))
    }



    const value = {cartOpen, setCartOpen, addItem, deleteItem, removeItem, cartItems, cartCount, total};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    ) 
}