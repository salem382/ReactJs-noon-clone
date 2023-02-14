import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openSign : false
}

const signSlice = createSlice({
    name:'sign',
    initialState,
    reducers:{
       
        setOpenSign :(state, action) => {
            state.openSign = action.payload;
        }
    }
})

export default signSlice.reducer;
export const {setOpenSign} = signSlice.actions;