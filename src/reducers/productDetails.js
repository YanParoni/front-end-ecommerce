import { PRODUCTS } from '../actions';

const INITIAL_STATE = {
  products: [],
};
function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS:
      return { products: action.state };
    default:
      return state;
  }
}

export default cart;
