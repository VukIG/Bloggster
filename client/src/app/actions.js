import axios from 'axios';

export const fetchData = (page) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    console.log('kurac')
    axios
      .get('http://localhost:5000/posts?page='+page)
      .then((response) => {
        console.log('bela ciganka')
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};
