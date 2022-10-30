const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_ITEM':
      const newItems = state.cart.filter(
        (item) =>
          item.id !== action.payload.id &&
          item.countInStock.size !== action.payload.size
      );
      return { ...state, cart: newItems };
    default:
      break;
  }
  return state;
};

export default reducer;
