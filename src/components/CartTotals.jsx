import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const {tax,cartTotal,shipping,orderTotal} = useSelector(state => state.cartState);
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* Sub total */}
        <p className='flex justify-between border-b text-xs border-base-200 pb-2'>
          <span>SubTotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* Total */}
        <p className='mt-4 flex justify-between text-sm  pb-2'>
          <span className='font-bold'>Order Total</span>
          <span className='font-bold'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;