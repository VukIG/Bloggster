// reducer.js
const initialState = {
  error: null,
  loading: true,
  currentPage: '1',
  data: [],
};

export const cardDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case 'FETCH_DATA_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
