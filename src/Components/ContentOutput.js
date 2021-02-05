import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import TodoItem from './TodoItem'
import {onSearchStatus} from '../Reducer/Search'

function ContentOutput() {

    const dispatch = useDispatch();
    const search = useSelector(state => state.Search)
    const listData = useSelector(state => state.ListData);
    var todoList ;
    if(listData){
        if(search.status==-1){
            todoList = listData.filter((item)=>{
                    return item.name.indexOf(search.name)==0;   
            })
        }
        else{
            todoList = listData.filter((item)=>{
                return item.name.indexOf(search.name)==0 && item.status==search.status;
            })
        }
         todoList = todoList.map((item,stt)=><TodoItem key={item.id} stt={stt+1} data={item}/>)
    }
    const onChangeStatus =(e)=>{
        var value = e.target.value;
        dispatch(onSearchStatus(value));
    }
    return (
        <div class="row mt-15">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">STT</th>
                            <th class="text-center">Tên</th>
                            <th class="text-center">Trạng Thái</th>
                            <th class="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" class="form-control" />
                            </td>
                            <td>
                                <select class="form-control" onChange={onChangeStatus}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="1">Ẩn</option>
                                    <option value="0">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {todoList ? todoList : ''}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContentOutput
