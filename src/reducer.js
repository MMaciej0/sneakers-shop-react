const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_ITEM':
      const newItems = state.cart.filter(
        (item) => item.cartID !== action.payload
      );
      return { ...state, cart: newItems };

    case 'CALCULATE_TOTALS':
      const { total, amount } = state.cart.reduce(
        (acc, curr) => {
          acc.total += curr.price * curr.amount;
          acc.amount += curr.amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, amount, total };

    case 'CHANGE_AMOUNT':
      const itemsNewAmount = state.cart
        .map((item) => {
          if (item.cartID === action.payload.id) {
            if (action.payload.operation === '+') {
              const newAmount =
                item.amount < item.countInStock.qty
                  ? item.amount + 1
                  : item.amount;
              return { ...item, amount: newAmount };
            }
            if (action.payload.operation === '-') {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: itemsNewAmount };

    case 'LOGIN_USER':
      return { ...state, user: action.payload };

    default:
      break;
  }
  return state;
};

export default reducer;
