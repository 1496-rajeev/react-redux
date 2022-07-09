import { countReducer } from './reducers/countReducer';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({ countReducer });
