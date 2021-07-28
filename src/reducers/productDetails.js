import { PRODUCTS, SEARCH_INPUT } from '../actions';

const INITIAL_STATE = {
  products: [],
  input: '',
};
function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS:
      return { products: action.state };
      case SEARCH_INPUT:
        return { 
        ...state,
          input: action.state 
        }
    default:
      return state;
  }
}

export default cart;
