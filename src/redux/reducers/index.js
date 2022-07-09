import { countReducer } from './countReducer';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({ countReducer });
