import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl:'http://localhost:3000'});
// const baseQuery = fetchBaseQuery({baseUrl:'https://medmamager.onrender.com'});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['add'],
  endpoints:(builder)=>({})
}) 