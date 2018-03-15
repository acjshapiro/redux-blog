import { combineReducers } from 'redux';
import blogs from './blogs';
import nextId from './nextId';
import cFilter from './cFilter';

const rootReducer = combineReducers({
    blogs,
    nextId,
    cFilter
})

export default rootReducer;