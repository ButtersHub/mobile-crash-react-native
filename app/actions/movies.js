/**
 * Created by levv on 22/01/2017.
 */
import * as types from './types'
import Api from '../lib/api'

export function fetchMovies() {
    return (dispatch, getState) => {
        const params = [
            'api_key=83f2859a8024103dde9a257f951272d5',
        ].join('&')
        return Api.get(`?${params}`).then(movs => {
            dispatch(setDeliveredMovies({movies: movs}));
        }).catch( (ex) => {
            console.log(ex.message);
        });
    }
}

export function setDeliveredMovies({ movies }) {
    return {
        type: types.SET_DISCOVERED_MOVIES,
        movies,
    }
}