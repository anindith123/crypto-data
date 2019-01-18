let initialState = {
    coins: [],
    coins_available: false,
    coin_available: false,
    coin: [],
    convert: 'USD'

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                coins: action.payload[0],
                coins_available: true,
                convert: action.payload[1]

            }
        case 'RESET_DATA':
            return {
                ...state,
                coin: []

            }
        case 'GET_COIN':
            return {
                ...state,
                coin: action.payload,
                coin_available: true
            }
        case 'CONVERT':
        return{
        ...state,
        convert : action.payload
        }
        default: return state;
    }

}