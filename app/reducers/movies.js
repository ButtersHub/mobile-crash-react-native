/**
 * Created by levv on 22/01/2017.
 */

import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

export const foundMovies = createReducer({}, {
    [types.SET_FOUND_MOVIES](state, action) {
        let newState = {}
        action.movies.forEach( (movie) => {
            let id = movie.id
            newState[id] = Object.assign({}, movie, { id });
        });
        return newState;
    },
});

export const discoveredMovies = createReducer({}, {
    [types.SET_DISCOVERED_MOVIES](state, action) {
        let newState = {}
        action.movies.forEach( (movie) => {
            let id = movie.id
            newState[id] = Object.assign({}, movie, { id });
        });
        return newState;
    },
});


export const moviesCount = createReducer(0, {
    [types.SET_DISCOVERED_MOVIES](state,action){
        return action.movies.length
    }
});



