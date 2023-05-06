import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success:''
}

const globalReducer = createSlice({
    name:'globalReducer',
    initialState,
    reducers:{
        setSuccessMsg:(state,action)=>{
            state.success = action.payload;
        },
        removeMsg:(state,action)=>{
            state.success = '';
        }
    }
});

export const {setSuccessMsg,removeMsg} = globalReducer.actions;
export default globalReducer.reducer;