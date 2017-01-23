/**
 * Created by levv on 21/01/2017.
 */
class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static xhr(route, params, verb) {
        const host = 'https://api.themoviedb.org/3/discover/movie'
        const url = `${host}${route}`
        let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
        options.headers = Api.headers()
        return fetch(url, options).then( resp => {
            let json = resp.json();
            if (resp.ok) {
                return json
            }
            return json.then(err => {throw err});
        }).then( json => json.results );
    }
}
export default Api