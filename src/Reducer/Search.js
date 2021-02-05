import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        status:'-1',
        name:'',
    },
    reducers:{
        onSearchName(state,action){
            console.log(action.payload);
            state.name=action.payload;
        },
        onSearchStatus(state,action){
            state.status=action.payload;
        }
    }
})
export const {onSearchName,onSearchStatus} = searchSlice.actions;
export default searchSlice.reducer;
