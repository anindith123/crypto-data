
import axios from 'axios';

export function fetchall(sort) {
    return function (dispatch) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=9fc98142-428a-4d61-8d29-66fc6aff1bbf&sort=${sort}`)
            .then((response) => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function fetchone(id) {
    
    return function (dispatch) {
        console.log("fetchone dispatched");
        axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=9fc98142-428a-4d61-8d29-66fc6aff1bbf&id=${id}`)
            .then((response) => {
                dispatch({
                    type: 'FETCH_COIN',
                   payload: response.data
               })
           })
           .catch(function (error) {
                console.log(error);
            })
        }
    }
