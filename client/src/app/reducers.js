import { combineReducers } from 'redux';
import { cardDataReducer } from './cardDataReducer';
import {searchReducer} from './searchReducer';
const reducers = combineReducers({
  cardData: cardDataReducer,
  search: searchReducer,
});

export default reducers;
