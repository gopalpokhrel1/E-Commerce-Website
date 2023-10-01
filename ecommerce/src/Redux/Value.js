import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Slice/Slice'

const store = configureStore({
    reducer:userSlice
})

export default store