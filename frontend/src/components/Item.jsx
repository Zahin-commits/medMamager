import React from 'react'
import { useAddQuantityMutation } from '../features/apiQuery'

export const Item = ({med}) => {
    const quantity = 10;
    const [addQuantity,{isLoading}] = useAddQuantityMutation();
    
    const handleQuantity =()=>{
      addQuantity({id:med._id,quantity}).unwrap().then(res=>{
        console.log(res);
      })
    }
  return (
    <div className='item'>
        <span className={`stock ${med.stock==0?'alert':''}`}>{med.stock}</span>
        <p>{med.name}</p>
        <button onClick={handleQuantity} className='center'>+</button>
    </div>
  )
}
