import { setDiscount } from './shop.types';

export const setDiscounts =(brand, item) => ({
  type: setDiscount.SET_DISCOUNT,
  brand,
  item
});