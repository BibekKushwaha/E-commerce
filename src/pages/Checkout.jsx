import { CartTotal, CheckoutForm,SectionTitle } from '../components';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';



export const loader = (store)=>{
  const user =   store.getState().userState.user;
  
  if(!user){
    toast.warn("warn you before the order any product please login");
    return redirect('/login');
  }
  
  return null;
};



const Checkout = () => {
   const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
}

export default Checkout