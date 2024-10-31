import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice'
const store=configureStore({
    reducer:{
        todos:todoReducer
    }
})
export default store