import React from 'react';

const FormInput = ({label,name,type,defaultValue,size}) => {
  return (
    
    <label className="form-control ">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <input
         type={type}
         name={name} 
         placeholder="Type here" 
         className= {`input input-bordered  ${size}`}
         defaultValue={defaultValue}/>
        
    </label>
   
  )
}

export default FormInput