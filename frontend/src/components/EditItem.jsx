import React, { useState } from 'react'
import { useEditMedMutation } from '../features/apiQuery';

export const EditItem = ({med}) => {
    const [name,setName] = useState(med?.name);
    const [stock,setStock] = useState(med?.stock);
    const [dailyIntake,setDailyIntake] = useState(med?.dailyIntake);
    const [redLine,setRedLine] = useState(med?.redLine);

    const [editMed,{isLoading}] = useEditMedMutation();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      editMed({id:med?._id,name,stock,dailyIntake,redLine}).unwrap().then(res=>{
        
        console.log('edit med',res);
        if(res.success){
          alert('Your medicine has been edited successfully');
        }
      });
    }
  return (
    <div>
      <h4>Edit {med?.name}</h4>
      
        <form onSubmit={handleSubmit}>
         <span>name</span>
         <input type="text" value={name}
          onChange={(e)=>{setName(e.target.value)}}
          />

         <span>stock</span>
         <input type="number" value={stock}
          onChange={(e)=>{setStock(e.target.value)}}
          />

         <span>intake per day</span>
         <input type="number" value={dailyIntake}
          onChange={(e)=>{setDailyIntake(e.target.value)}}
         />

         <span>redline</span>
         <input type="number" value={redLine}
          onChange={(e)=>{setRedLine(e.target.value)}}
         />
        {/*  <span>name</span>
         <input type="text" value={med?.name}/> */}
        <button>submit</button>
        </form>
    </div>
  )
}
