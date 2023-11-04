import { createSlice } from "@reduxjs/toolkit";

const initialState={
    val:[]
};


const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        insert:(state, action)=>{
               state.val.push(action.payload);
        },

        remove:(state, action)=>{
         state.val =state.val.filter((val)=> val.name !== action.payload);

         console.log(state.val);

        },

        clearcart:(state)=>{
            state.val =[];
        }
    }

})


export const {insert, remove, clearcart} = cartSlice.actions;
export default cartSlice.reducer;