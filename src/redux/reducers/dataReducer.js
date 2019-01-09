let initialState = {
    coins: [],
    coins_available: false,
    coin_available:false,
    coin_meta: [],
    coin_quote: [],
    coin_quote_available:false

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                coins: action.payload,
                coins_available: true

            }
        case 'FETCH_COIN_META':
            return {
                ...state,
                coin_meta: action.payload,
                coin_available: true
            }

        case 'FETCH_COIN_QUOTE':
            return {
                ...state,
                coin_quote:action.payload,
                coin_quote_available:true
            }
        default: return state;
    }

}