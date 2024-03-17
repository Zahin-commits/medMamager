import React, { useState } from 'react'
import { useDeleteMedMutation, useEditMedMutation } from '../features/apiQuery';

export const EditItem = ({med, setPopup}) => {
    const [name,setName] = useState(med?.name);
    const [stock,setStock] = useState(med?.stock);
    const [dailyIntake,setDailyIntake] = useState(med?.dailyIntake);
    const [redLine,setRedLine] = useState(med?.redLine);

    const [editMed,{isLoading}] = useEditMedMutation();
    const [deleteMed] = useDeleteMedMutation();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      editMed({id:med?._id,name,stock,dailyIntake,redLine}).unwrap().then(res=>{
        
        console.log('edit med',res);
        if(res.success){
          setPopup(false)
          alert('Your medicine has been edited successfully');
        }
      });
    }

    const handleDelete = ()=>{
    const con = confirm(`Are you sure you want to delte ${med?.name} permanently?`);
    if(con){
     deleteMed({id:med?._id}).unwrap().then(res=>{
      if(res.success){
        setPopup(false);
        alert('Your medicine has been deleted successfully');
      }
     });
    }
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
        <button className='btn red' onClick={handleDelete}>delete</button>
    </div>
  )
}
