import React from 'react';

const initialState = {
  userLoggedIn: false,
  articleItems: [],
  user: {
    name: '',
    email: '',
    password: '',
  },
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.user.name,
          email: action.payload.user.email,
        })
      );
      break;

    default:
      break;
  }
  return state;
};
