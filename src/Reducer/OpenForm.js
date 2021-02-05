import { createSlice } from '@reduxjs/toolkit'

const OpenForm = createSlice ({
    name:'openform',
    initialState : {
        isOpenForm:true,
        data:null,
    },
    reducers : {
        isToggleForm (state,action){
            state.data=action.payload;
            state.isOpenForm=!state.isOpenForm;
        },
        closeForm (state,action){
            state.isOpenForm=false;
        },
        openForm (state,action){
            if(action.payload){
                state.data=action.payload;
            }
            state.isOpenForm=true;
        }
        
    }
})
export const {isToggleForm,closeForm,openForm} = OpenForm.actions;
export default OpenForm.reducer;