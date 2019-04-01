import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import strains from './strains';
export default combineReducers({
 simpleReducer,
 strains
});