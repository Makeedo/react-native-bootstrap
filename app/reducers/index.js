import { combineReducers } from 'redux';
import * as noOpReducer from './noOp';

export default combineReducers(Object.assign({},
    noOpReducer
));
