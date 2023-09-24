// src/redux/reducers.js
import { combineReducers } from 'redux';
import { cardDataReducer } from './cardDataReducer';

const rootReducer = combineReducers({
  cardData: cardDataReducer,
});

export default rootReducer;
