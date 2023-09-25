import axios from 'axios';
import { memo } from 'react';
export const fetchData = (page) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get('http://localhost:5000/posts?=' + page)
      .then((response) => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
          page: page,
        });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};

export const searchData = (memories,tags) => {
    return (dispatch) =>{
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get('http://localhost:5000/posts/search?searchQuery='+memories+'&tags='+tags)
      .then((response)=>{
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  }
}