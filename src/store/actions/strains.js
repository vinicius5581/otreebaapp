export const FETCH_STRAINS_REQUEST = 'FETCH_STRAINS_REQUEST';
export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAINS_SUCCESS';
export const FETCH_STRAINS_FAILURE = 'FETCH_STRAINS_FAILURE';

const API_KEY = '5ee4afe26216d2f3e8c6aef4d2cf338be1855925';
let page = 0;
let count = 1000;
let sort = '-createdAt';


export const fetchStrainsRequest = () => ({
    type: FETCH_STRAINS_REQUEST
});

export const fetchStrainsSuccess = strains => ({
    type: FETCH_STRAINS_SUCCESS,
    payload: { strains }
});

export const fetchStrainsFailure = error => ({
    type: FETCH_STRAINS_FAILURE,
    payload: { error }
});


export function fetchStrains() {
    return dispatch => {
        dispatch(fetchStrainsRequest());
        return fetch(`https://api.otreeba.com/v1/strains?page=${page}&count=${count}&sort=${sort}&X-API-Key=${API_KEY}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchStrainsSuccess(json.data));
            return json.data;
        })
        .catch(error => dispatch(fetchStrainsFailure(error)));
    };
    }
    
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
if (!response.ok) {
    throw Error(response.statusText);
}
return response;
}