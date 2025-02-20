import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
    cartItems:[],
    numItemInCart:0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0
}
const getInitialState = ()=>{
    return JSON.parse(localStorage.getItem('cart')) || defaultState ;
}

export const cartSlice  = createSlice({
    name: 'cart',
    initialState:getInitialState(),
    reducers: {
        addItem:(state,action)=>{
            const {product} = action.payload;
            
            const item = state.cartItems.find((item)=>item.cartId === product.cartId);
            if(item){
                item.amount += product.amount
            }else{
                state.cartItems.push(product);
            }
            state.numItemInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.success("Item add to cart")

        },
        calculateTotal:(state)=>{
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart',JSON.stringify(state));
        },
        removeItem:(state,action)=>{
            const {cartId} = action.payload;
            const product = state.cartItems.find((item)=>item.cartId === cartId);
            state.cartItems = state.cartItems.filter((item)=>item.cartId !== cartId); 
            state.numItemInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.error("Item remove from cart");
        },
        editItem:(state,action)=>{
            const {cartId,amount} = action.payload;
            const product = state.cartItems.find((item)=>item.cartId === cartId);
            state.numItemInCart += amount - product.amount;
            state.cartTotal += product.price - (amount-product.amount);
            product.amount = amount;
            cartSlice.caseReducers.calculateTotal(state);
            toast.success("Item edit in cart");

        },
        clearCart:()=>{
            localStorage.setItem('cart',JSON.stringify(defaultState));
            return defaultState;
        }
    }
});

export const  {addItem,removeItem,editItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;