import React from 'react'
import {useDispatch} from 'react-redux';
import {onSearchName} from '../Reducer/Search'
function FormControl() {
    const dispatch = useDispatch();
    const onSearch = (e)=>{
        var value = e.target.value;
        dispatch(onSearchName(value));
    }
    return (
        <div class="row mt-15">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Nhập từ khóa..." onChange={onSearch}/>
                <span class="input-group-btn">
                            <button class="btn btn-primary" type="button">
                                <span class="fa fa-search mr-5"></span>Tìm
                           </button>
                </span>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span class="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button">
                                    <span class="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z
                                    </span>
                                </a>
                    </li>
                    <li>
                        <a role="button">
                                    <span class="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A
                                    </span>
                                </a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                    <li><a role="button">Trạng Thái Ẩn</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default FormControl
