import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    store:[]
}

const Slice = createSlice({
    name:"store",
    initialState:initialState,

    reducers:{
        addToStore:((state,action)=>{
            state.store.push(action.payload)
        })
    }
})

export const {addToStore} = Slice.actions;
export default Slice.reducer