import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './Slice/Slice';
import cartSlice from './Slice/Cart'

const rootReducer = combineReducers({
    user:userSlice,
    cart:cartSlice
})

const store = configureStore({
    reducer: rootReducer,
  
})

export default store