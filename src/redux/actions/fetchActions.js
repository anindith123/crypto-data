
import axios from 'axios';

export function fetchall(sort,convert) {
    return function (dispatch) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9fc98142-428a-4d61-8d29-66fc6aff1bbf&sort=${sort}&convert=${convert}`)
            .then((response) => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: [response.data,convert]
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function convert(currency){
    return function(dispatch){
        dispatch({
            type: 'CONVERT',
            payload: currency
        })
    }
}


export function reset() {
    return function (dispatch) {
        dispatch({
            type: 'RESET_DATA'
        })
    }
}

function fetchquote(id) {
    console.log("coinquoteget");
    return axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=9fc98142-428a-4d61-8d29-66fc6aff1bbf&id=${id}`);
}
function fetchmeta(id) {
    console.log("coinmetaget");
    return axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=9fc98142-428a-4d61-8d29-66fc6aff1bbf&id=${id}`)
}

export function getcoin(id) {

    return function (disptach) {
        axios.all([fetchquote(id), fetchmeta(id)])
            .then(axios.spread(function (quote, meta) {
                console.log("&&&&&&&&&&&&&&&&&&");
                console.log([quote, meta]);
                disptach({
                    type: 'GET_COIN',
                    payload: [quote, meta]
                })

            }))
            .catch(function (error) {
                console.log(error);
            })
    }
}


