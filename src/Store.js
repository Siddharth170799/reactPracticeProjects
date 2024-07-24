import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";


const store = configureStore({
    reducer:{
        Sid : Slice
    }
})
export default store