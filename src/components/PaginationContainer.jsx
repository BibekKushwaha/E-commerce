import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const {meta}  = useLoaderData();
  const {pageCount,page} = meta.pagination;

  const pages = Array.from({length:pageCount},(_,index)=>(index+1));
  const {search,pathname} = useLocation();
  const navigate = useNavigate();
  const handlePageSubmit = (pageNumber)=>{
    const searchParams = new URLSearchParams(search);
    searchParams.set('page',pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`)
    
  };

  if(pageCount < 2){
    return null;
  };
  
  return (
    <div className='mt-16 flex justify-end'>
      <div className="join">
        <button className='btn btn-xs sm:btn-md join-item' onClick={
          ()=>{
            let prev = page-1;
            if(prev <1) prev = pageCount
            handlePageSubmit(prev)}} >
          Prev
        </button>
        {
          pages.map((pageNumber)=>(
            <button 
            key={pageNumber} 
            className={`btn btn-xs sm:btn-md join-item border-none${pageNumber === page ? 'border-base-300 bg-base-300' :''}`} 
            onClick={()=>handlePageSubmit(pageNumber)}
            >
              {pageNumber} 
            </button>
          ))
        }
        <button className='btn btn-xs sm:btn-md  join-item' onClick={()=>{
          let next = page+1;
          if(next > pageCount ) next = 1;
          handlePageSubmit(next)}} >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer