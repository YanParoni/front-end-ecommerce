export const SEARCH_INPUT = ' SEARCH_INPUT';
export const CATEGORIES = 'CATEGORIES';
export const PRODUCTS = 'PRODUCTS';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';

export const sendProducts = (state) => ({
  type: PRODUCTS,
  state,
});

export const searchInput = (state) => ({
  type: SEARCH_INPUT,
  state,
});

