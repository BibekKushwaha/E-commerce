import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filter = () => {
  const {meta,params}  = useLoaderData();
  const { search, company, categories, shipping, orders, price } = params;
  
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput
        type='text'
        name='search'
        label= 'Search Product'
        placeholder='Search'
        size= 'input-sm'
        defaultValue={search}
      />
      
      {/* Categories */}
      <FormSelect
        name='categories'
        label='Categories'
        list={meta.categories}
        size= 'select-sm'
        defaultValue={categories}
      />
      {/* Company */}
      <FormSelect
        name='company'
        label='Company'
        list={meta.companies}
        size= 'select-sm'
        defaultValue={company}
      />
      {/* Orders */}
      <FormSelect
        name='orders'
        label='Sort by'
        list={['a-z', 'z-a', 'high', 'low']}
        size= 'select-sm'
        defaultValue={orders}
      />
      {/* Price */}
      <FormRange
        name='price'
        label='Select Price'
        size='range-sm'
        defaultValue={price}
      />
      {/* Shipping */}
      <FormCheckBox 
        name='shipping'
        label='Free Shipping'
        size='checkbox-sm'
        defaultValue={shipping}
      />
      {/* button */}
      <button type='submit' className='btn btn-primary btn-sm'>Search</button>
      <Link to='/products' className='btn btn-accent btn-sm'>
       Reset
      </Link>
    </Form>
  )
}

export default Filter