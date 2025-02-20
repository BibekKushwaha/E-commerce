import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct} from './pages';
import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import {loader as productsLoader} from './pages/Products';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { store } from './store';
import {loader as checkoutLoader} from './pages/Checkout';
import { action as checkoutFormAction } from './components/CheckoutForm';
import {loader as ordersLoader} from './pages/Orders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element: <Landing />,
        errorElement:<ErrorElement/>,
        loader:landingLoader(queryClient),
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'cart',
        element:<Cart/>
      },
      {
        path: 'checkout',
        loader:checkoutLoader(store),
        action:checkoutFormAction(store,queryClient),
        element:<Checkout/>
      },
      {
        path: 'orders',
        element:<Orders/>,
        loader:ordersLoader(store,queryClient)
      },
      {
        path: 'product/:id',
        loader:singleProductLoader(queryClient),
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
      },
      {
        path: 'products',
        loader:productsLoader(queryClient),
        errorElement:<ErrorElement/>,
        element:<Products/>

      },
      
    ]

  },
  {
    path: 'login',
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store),
  },
  {
    path: 'register',
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction,
  },
])

function App() {

  return (
    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen ={false}/>
    </QueryClientProvider>
  )
}

export default App
