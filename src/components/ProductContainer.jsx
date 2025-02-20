import React,{useState} from 'react';
import ProductsGrid from './ProductsGrid';
import ProductList from './ProductList';
import { useLoaderData } from 'react-router-dom';
import {BsFillGridFill,BsList} from 'react-icons/bs';


const ProductContainer = () => {
  const {meta} = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout,setLayout] = useState('grid');

  const setActiveStyle = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content': 'btn-ghost text-base-content'}`
  }  
  return (
    <>
    {/* HEADER */}
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
      <h4 className='font-medium text-md'> {totalProducts} Product {totalProducts >1 && 's' }</h4>
      <div className="flex gap-x-2"> 
        <button className={setActiveStyle('grid')} onClick={()=>setLayout('grid')}>
          <BsFillGridFill/>
        </button>
        <button className={setActiveStyle('list')} onClick={()=>setLayout('list')}>
          <BsList/>
        </button>
      </div>
    </div>
    {/* PRODUCTS */}
    <div>
      {
        totalProducts === 0 ? <h1 className='text-2xl mt-16'> Searching the new products...</h1> : layout === 'grid' ? <ProductsGrid/> : <ProductList/>
      }
    </div>
    
    </>
  )
}

export default ProductContainer