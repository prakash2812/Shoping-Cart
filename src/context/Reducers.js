export const cartReducer = (state, actions) => {
  switch (actions.type) {
      case 'ADD_TO_CART':
          return {
              ...state,
              cart: [...state.cart, actions.payload],
          };
      default:
          return state;
  }
};
