import React from 'react';
import { useSelector } from 'react-redux';
import { CartItemList, CartTotal, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const numItemInCart = useSelector((state) => state.cartState.numItemInCart);
  const { user } = useSelector((state) => state.userState);

  if(numItemInCart === 0){
    return <SectionTitle text= " your cart is empty"/>
  }
  return (
    <>
      <SectionTitle  text= "Shopping Cart"/>
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemList/>
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotal/>
          {
            user ? (
              <Link to='/checkout' className='btn btn-primary btn-block mt-8'>Process to Checkout</Link>
            ) :(
              <Link to='/login' className='btn btn-primary btn-block mt-8'>Login to Checkout</Link>
            )
          }
        </div>

      </div>
    </>
  )
}

export default Cart