import React, { useState } from 'react'
import { useAddMedMutation } from '../features/apiQuery';
import { Link } from 'react-router-dom';

export const AddItem = () => {

  const [name,setName] = useState('');
  const [stock,setStock] = useState(0);
  const [dailyIntake,setDailyIntake] = useState(0);
  const [redLine,setRedLine] = useState(0);

  const [addMed,{isLoading}] = useAddMedMutation();

  const handleAddMed = async(e)=>{
    e.preventDefault();

    addMed({name,stock,dailyIntake,redLine}).unwrap().then(res=>{
      if(res.sucess){
        alert("Your medicine has been added successfully!");
      }
      console.log(res);
    });

    console.log('add med');
  }
  return (
    <div>
      <h2>Add Medicine</h2>
      <form className='add_med--form' onSubmit={handleAddMed} >
         <span>name</span>
         <input type="text" 
         onChange={(e)=>{setName(e.target.value)}} value={name} />

         <span>inake per day</span>
         <input type="number" 
         onChange={(e)=>{setDailyIntake(e.target.value)}} value={dailyIntake} />

         <span>stock</span>
         <input type="number" 
         onChange={(e)=>{setStock(e.target.value)}} value={stock} />

         <span>redline</span>
         <input type="number"  
         onChange={(e)=>{setRedLine(e.target.value)}} value={redLine} />

         <button>submit</button>
      </form>

      <Link to={'/'}>Go back</Link>
    </div>
  )
}
