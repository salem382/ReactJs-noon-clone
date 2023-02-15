import { configureStore } from "@reduxjs/toolkit";
import sign from './showSignSlice';
import sidebar from './sidebarSlice';
import popUp from './changeInfoSlice';
export default  configureStore({
    reducer:{
        sign,
        sidebar,
        popUp
    }   
})
