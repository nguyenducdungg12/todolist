import React from 'react'
import {useDispatch} from 'react-redux';
import *as action from '../Reducer/OpenForm';
function ButtonAdd() {
    const dispatch = useDispatch();
    var openForm = ()=>{
        dispatch(action.isToggleForm());
    }

    return (
        <button type="button" class="btn btn-primary" onClick={openForm}>
             <span class="fa fa-plus mr-5"></span>Thêm Công Việc
         </button>
    )
}

export default ButtonAdd
