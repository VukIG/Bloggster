const initialState = {
    error:null,
    loading: true,
    found: false,
    itemData: [],
}

export const searchReducer = (state = initialState, action) => {
        switch (action.type) {
        case ('FETCH_DATA_REQUEST'):
            return{
                ...state,
                loading:true,
                found:false,
            }
        case ('DATA_FOUND'):
            return{
                ...state,
                loading:false,
                found:true,
                itemData: action.payload,
        }
        case ('DATA_NOT_FOUND'):
            return{
                ...state,
                loading:false,
                found:false,
        }
        case 'FETCH_DATA_FAIL':
        return {
            ...state,
            loading: false,
            error: action.payload,
        };    
        default:
            return state;
    }
}