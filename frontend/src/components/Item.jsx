import React, { useState } from 'react'
import { useAddQuantityMutation } from '../features/apiQuery'
import { EditItem } from './EditItem';

export const Item = ({med}) => {
    const [showPopup,setShowPopup] = useState(false);
    const [showEditPopup,setShowEditPopup] = useState(false);
    const [quantity,setQuantity] = useState(0);

    const [addQuantity,{isLoading}] = useAddQuantityMutation();
    
    const handleQuantity =()=>{
      const quantityInt = parseInt(quantity);
      addQuantity({id:med._id,quantity:quantityInt}).unwrap().then(res=>{
        console.log(res);
        if(res){
           setQuantity(0);
           setShowPopup(false);
        }
      })
    }
  return (
    <div className='item'>

       {showPopup && <div className="popup">
             <input type="number" 
              min={0} max={100}
              onChange={(e)=>{setQuantity(e.target.value)}}
              value={quantity} />
             <button onClick={handleQuantity} >add</button>
             <button onClick={()=>{setShowPopup(false)}}>cancel</button>
          </div>}

       {showEditPopup && <div className="popup">
              <EditItem med={med} setPopup={setShowEditPopup} />
             <button onClick={()=>{setShowEditPopup(false)}}>cancel</button>
          </div>}

        <span className={`stock ${med.stock==0?'alert':''}`}>{med.stock}</span>
        <p className='title' onClick={()=>{setShowEditPopup(true)}} >{med.name}</p>
        <button onClick={()=>{setShowPopup(true)}} className='center btn add'>+</button>
    </div>
  )
}
