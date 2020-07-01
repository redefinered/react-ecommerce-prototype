import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    toggleCartHidden: [],
    addItem: ['item'],
    removeItem: ['item'],
    clearItemFromCart: ['item'],
    clearCart: []
  },
  { prefix: '@Cart/' }
);

export { Types, Creators };
