import React from 'react'
import { useGetMedListQuery } from '../features/apiQuery'
import { Item } from './Item';

export const Home = () => {

    const {data,isLoading} = useGetMedListQuery();
    console.log(data);
  return (
    <div>
        <h1 className='poppins-light'>Your Medicine List</h1>

        <div className="display">
          {isLoading && <p>Loading...</p>}
            {data?.medicine?.map(med=>(
             <Item key={med?._id} med={med} />
            ))}
        </div>
    </div>
  )
}
