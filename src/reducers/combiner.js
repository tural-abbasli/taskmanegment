import { combineReducers } from 'redux'; 

import { taskReducer,checkReducer } from './taskReducer';

export default combineReducers({
    task:taskReducer,
});