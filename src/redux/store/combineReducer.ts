import {combineReducers} from 'redux';
import userReducer from '../reducers/UserReducer';

const CombineReducers = combineReducers({
 User:userReducer
});
export default CombineReducers;
