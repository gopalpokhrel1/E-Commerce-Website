import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState={
    val:[]
};


const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        insert:(state, action)=>{
               const newitem = {
                ...action.payload,
                id:nanoid()
               }

               state.val.push(newitem);
        },

        remove:(state, action)=>{
         state.val = state.val.filter((val)=> val.id !== action.payload);

        },

        clearcart:(state)=>{
            state.val =[];
        }
    }

})


export const {insert, remove, clearcart} = cartSlice.actions;
export default cartSlice.reducer;