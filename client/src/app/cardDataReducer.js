const initialState = {
    error: null,
    loading: false,
    data: []
}
export const cardDataReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            }
        case 'FETCH_DATA_SUCCSESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
        }
        case 'FETCH_DATA_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
        }
        default:
            return state;
    }
}
