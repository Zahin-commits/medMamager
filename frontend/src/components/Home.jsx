import React, { useState } from 'react'
import { useGetMedListQuery } from '../features/apiQuery'
import { Item } from './Item';
import { Link } from 'react-router-dom';

export const Home = () => {
   
    const {data,isLoading} = useGetMedListQuery();

    console.log(data);
  return (
    <div>
        <h1 className='poppins-light'>Your Medicine List</h1>

        <Link className='add_btn' to={'/add'}>Add medicine</Link>
       
        <div className="display">
       
          {isLoading && <p>Loading...</p>}
            {data?.medicine?.map(med=>(
             <Item key={med?._id} med={med} 
              // quantity={quantity} setQuantity={setQuantity}
              // showPopup={showPopup} setShowPopup={setShowPopup}
             />
            ))}
        </div>
    </div>
  )
}
