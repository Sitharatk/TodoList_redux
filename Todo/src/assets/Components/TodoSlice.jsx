import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
   name:"todos",
   initialState:[],
   reducers:{
    addTask:(state,action)=>{
        state.push({id:Date.now(),text:action.payload})
    },

    deleteTask:(state,action)=>{
        return state.filter((todo)=>todo.id!==action.payload)
    },
    editTask:(state,action)=>{
        const task = state.find((task) => task.id === action.payload.id);
        if (task) {
          task.text = action.payload.text;
        }
    }


   }
})
export const {addTask,deleteTask,editTask}=TodoSlice.actions
export default TodoSlice.reducer