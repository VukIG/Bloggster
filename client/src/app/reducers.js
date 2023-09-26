import { combineReducers } from 'redux';
import { cardDataReducer } from './cardDataReducer';
import { searchReducer } from './searchReducer';
import { postReducer } from './postReducer';
const reducers = combineReducers({
  cardData: cardDataReducer,
  search: searchReducer,
  post: postReducer,
});

export default reducers;
