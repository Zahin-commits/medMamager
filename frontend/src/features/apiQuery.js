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
        
        addMed:builder.mutation({
            query:(data)=>({
                url: `/medicine`,
                body: {name:data.name,stock:data.stock,
                       dailyIntake:data.dailyIntake,
                       redLine:data.redLine,
                       intakeDates:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                method: 'POST',
                credentials:"include"  
            }),
            invalidatesTags:["add"]
        }),

        editMed:builder.mutation({
            query:(data)=>({
                url: `/medicine/med/edit/${data.id}`,
                body: {name:data.name,stock:data.stock,dailyIntake:data.dailyIntake,redLine:data.redLine},
                method: 'PATCH',
                credentials:"include"  
            }),
            invalidatesTags:["add"]
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

        deleteMed:builder.mutation({
            query:(data)=>({
                url: `/medicine/med/${data.id}`,
                body: data,
                method: 'DELETE',
                credentials:"include"  
            }),
            invalidatesTags:["add"]
        }),
        
    })
})

export const {useGetMedListQuery,useAddMedMutation,
              useEditMedMutation,useAddQuantityMutation,
              useDeleteMedMutation
             } = medApiSlice;