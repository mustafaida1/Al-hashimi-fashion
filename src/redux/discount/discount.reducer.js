import { DISCOUNT_ITEMS } from './discount.data';

const INITIAL_STATE = {
    items: DISCOUNT_ITEMS,
    
  };

  export const discountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };