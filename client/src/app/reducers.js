import { combineReducers } from 'redux';
import { cardDataReducer } from './cardDataReducer';

const reducers = combineReducers({
  cardData: cardDataReducer,
});

export default reducers;
