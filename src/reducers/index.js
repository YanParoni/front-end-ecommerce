import { combineReducers } from 'redux';
import user from './user';
import productDetails from './productDetails';

const rootReducer = combineReducers({
  productDetails,
  user,
});

export default rootReducer;
