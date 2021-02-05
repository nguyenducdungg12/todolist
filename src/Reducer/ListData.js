import { createSlice } from "@reduxjs/toolkit";
import FindId from '../Components/asset/findID'

const listdataSlice = createSlice({
    name:'listdata',
    initialState:[],
    reducers:{
        addForm(state,action){
            const data = action.payload;
            state.push(data);
        },
        updateForm(state,action){
            const {id} = action.payload;
            var stt = FindId(id,state);
            state[stt]=action.payload;
        },
        deleteForm(state,action){
            const {id} = action.payload;
            var stt = FindId(id,state);
            state.splice(stt,1);
        }
    }
})
export const {addForm,updateForm,deleteForm} =listdataSlice.actions;
export default listdataSlice.reducer;