import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  item:[]
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        AddItems:(state, action)=>{

            state.item= action.payload



            


            
            
        },
    }

})




export const {AddItems} = userSlice.actions;

export default userSlice.reducer;