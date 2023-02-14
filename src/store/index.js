import { configureStore } from "@reduxjs/toolkit";
import sign from './showSignSlice';
import sidebar from './sidebarSlice';
export default  configureStore({
    reducer:{
        sign,
        sidebar
    }   
})
