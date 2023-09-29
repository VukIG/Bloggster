import axios from 'axios';

const URL = 'localhost:5000';

export const fetchData = (page) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get(URL + '/posts?page=' + encodeURI(page))
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

export const searchData = (memories, tags) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get(
          URL + '/posts/search?searchQuery=' +
          encodeURIComponent(memories) +
          '&tags=' +
          encodeURIComponent(tags)
      )
      .then((response) => {
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};

export const uploadCard = (title, message, tags, img) => {
  return (dispatch) => {
    axios
      .post(URL + '/posts/createPost', {
        title: title,
        message: message,
        tags: tags,
        img: img,
      })
      .then((response) => {
        console.log(response)
        dispatch({
          type: 'FETCH_DATA_SUCCESS',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};
