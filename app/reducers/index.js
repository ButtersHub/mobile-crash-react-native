/**
 * Created by levv on 22/01/2017.
 */
import {combineReducers} from 'redux'
import * as moviesReducer from './movies';
export default combineReducers(Object.assign(
    moviesReducer,
));