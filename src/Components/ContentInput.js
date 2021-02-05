import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {closeForm} from '../Reducer/OpenForm'
import {addForm,updateForm} from '../Reducer/ListData'
import generateId from './asset/generateID'
function ContentInput() {
    const dispatch = useDispatch();
    const isOpenForm = useSelector(state => state.OpenForm);
    const [Form, setForm] = useState({
        name:'',
        status:1,
        id:generateId(),
    });
    useEffect(()=>{
            if(isOpenForm.data){
                setForm({...isOpenForm.data});
            }
    },[isOpenForm.data])
    const onSubmit = (e)=>{
        e.preventDefault();
        if(isOpenForm.data){
            dispatch(updateForm(Form));
        }
        else{
            dispatch(addForm(Form));
        }
         onCloseForm();
    }
    const clearData = ()=>{
        setForm({
            name:'',
            status:1,
            id:generateId(),
        })
    }
    const onChange = (e)=>{
       const FormValues = {...Form};
       FormValues[e.target.name] =e.target.value;
       setForm(FormValues);
    }
    const onCloseForm = ()=>{
        dispatch(closeForm());
        clearData();
    }
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style = {isOpenForm.isOpenForm ? {display:'block'} : {display:'none'} }>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{isOpenForm.data ? 'Sửa Công việc' : 'Thêm Công Việc'}</h3>
                    </div>
                    <div className="panel-body" >
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" value={Form.name} name='name'onChange={onChange}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" value={Form.status} name='status' onChange={onChange}>
                                <option value={0}>Kích Hoạt</option>
                                <option value={1}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">{isOpenForm.data ? 'Sửa' : 'Thêm'}</button>&nbsp;
                                <button type="button" className="btn btn-danger"onClick={onCloseForm}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default ContentInput
