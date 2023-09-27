import axios from 'axios';

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

export const searchData = (memories, tags) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    axios
      .get(
        'http://localhost:5000/posts/search?searchQuery=' +
          memories +
          '&tags=' +
          tags
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
      .post('http://localhost:5000/createPost', {
        title: title,
        message: message,
        tags: tags,
        img: img,
      })
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
