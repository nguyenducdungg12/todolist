import { combineReducers } from 'redux'
import OpenForm from './OpenForm';
import ListData from './ListData'
import Search from './Search'
const rootReducer = combineReducers({
    OpenForm,
    ListData,
    Search,
})
export default rootReducer;