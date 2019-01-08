let initialState = {
    coins: [],
    data_available: false,
    coin: []

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                coins: action.payload,
                data_available: true

            }
        case 'FETCH_COIN':
            return {
                ...state,
                coin: action.payload,
                data_available: true
            }
        default: return state;
    }

}