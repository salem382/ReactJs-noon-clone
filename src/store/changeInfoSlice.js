import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openPopUp:false,
    showPassword:false
}

const popUpSlice = createSlice({
    name:'popUp',
    initialState,
    reducers:{
       setPopUp :(state, action) => {
            state.openPopUp = action.payload;
       },
       setShowPassword :(state, action) => {
        state.showPassword = action.payload;
     }
    }
})

export default popUpSlice.reducer;
export const {setPopUp, setShowPassword} = popUpSlice.actions;