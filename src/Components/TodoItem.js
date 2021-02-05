import React from 'react'
import {useDispatch} from 'react-redux';
import {openForm} from '../Reducer/OpenForm';
import {updateForm,deleteForm} from '../Reducer/ListData'
function TodoItem(props) {
    const dispatch = useDispatch();
    const {stt,data} = props;

    const onUpdate =()=>{
        dispatch(openForm(data));
    }
    const onDelete = ()=>{
        dispatch(deleteForm(data));
    }
    const onChangeStatus =()=>{
        var temp = {...data};
        temp.status = data.status=='0' ? '1' : '0';
        dispatch(updateForm(temp));
    }
    return (
        <tr>
            <td>{stt}</td>
            <td>{data.name}</td>
            <td class="text-center" onClick={onChangeStatus}>
               {data.status=='0' ?  <span class="label label-success">Kích Hoạt</span> : <span class="label label-danger"> Ẩn</span>}
            </td>
            <td class="text-center">
                <button type="button" class="btn btn-warning" onClick={onUpdate}>
                    <span class="fa fa-pencil mr-5"></span>Sửa
                 </button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick = {onDelete}> 
                    <span class="fa fa-trash mr-5"></span>Xóa
            </button>
            </td>
        </tr>
    )
}

export default TodoItem
