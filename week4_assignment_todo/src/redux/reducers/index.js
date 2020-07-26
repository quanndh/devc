import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer';
import UiReducer from './UiReducer';

export default combineReducers({
    TaskReducer,
    UiReducer
})