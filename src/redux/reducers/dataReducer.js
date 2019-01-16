let initialState = {
    coins: [],
    coins_available: false,
    coin_available: false,
    coin: []

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                coins: action.payload,
                coins_available: true

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
        default: return state;
    }

}