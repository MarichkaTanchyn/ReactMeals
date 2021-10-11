import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
      const updatedItems = state.items.concat(action.item);
      const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
          items: updatedItems,
          totalAmount: newTotalAmount
      };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };

  const removeItemFromHandler = (id) => {
    dispachCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
