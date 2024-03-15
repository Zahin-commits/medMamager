import { apiSlice } from "./apiSlice";


export const medApiSlice =  apiSlice.injectEndpoints({
    endpoints: (builder)=>({

        getMedList: builder.query({
            query: () => ({
                url: `/medicine`,
                credentials:"include"
              }),
              providesTags: ['add'],
        }),
        
        getAllMsg:builder.mutation({
            query:(data)=>({
                url: `/message/get`,
                body: data,
                method: 'POST',
                credentials:"include"  
            })
        }),
        
        addQuantity:builder.mutation({
            query:(data)=>({
                url: `/medicine/med/${data.id}`,
                body: {quantity:data.quantity},
                method: 'PATCH',
                credentials:"include"  
            }),
            invalidatesTags:["add"]
        }),
        
    })
})

export const {useGetMedListQuery ,useGetAllMsgMutation,useAddQuantityMutation} = medApiSlice;