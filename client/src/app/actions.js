import axios from 'axios';
export const fetchData = (page) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get('https://fantastic-space-waddle-wq64v7pxvxrc95vw-5000.app.github.dev/posts?page=' + page)
      .then((response) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};
