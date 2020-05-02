import { SHOP_ITEMS } from './shop.data';

  // let filtred = this.props.shop ? Object.keys(this.props.shop).forEach(igkey => {
  //   this.props.shop[igkey].items.filter(ke => {
  //     console.log(ke)
  //   })
  // }): ["Not Found"];

const INITIAL_STATE = {
  items: SHOP_ITEMS,
  filtred:''
};
// INITIAL_STATE.filtred = INITIAL_STATE.items ? Object.keys(INITIAL_STATE.items).forEach(igkey => {
//   INITIAL_STATE.items[igkey].items.filter(ke => {
//     return ke;
//   })
// }):["Not Found "]
// console.log(INITIAL_STATE.filtred)

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
