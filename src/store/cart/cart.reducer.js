import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

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

export const cartSlice = createSlice({
    name: 'cart',
    initialState:CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
            },
        addItem(state, action){
            state.cartItems = addItemToCart(action.payload, state.cartItems)
        },
        removeItem(state, action){
            state.cartItems = removeItemFromCart(action.payload, state.cartItems)
        },
       deleteItem(state, action){
            state.cartItems = deleteItemFromCart(action.payload, state.cartItems)
        }

    }
})

export const {setIsCartOpen, addItem, removeItem, deleteItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;