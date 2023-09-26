const initialState = {
  error: null,
  success: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.payload) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        error: false,
        success: true,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        error: true,
        success: false,
      };

    default:
      return state;
  }
};
