import * as React from "react";

interface Coffee {
  img: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

type Action =
  | { type: "increment"; payload: { item: Coffee } }
  | { type: "decrement"; payload: { item: string } }
  | { type: "addCoffee"; payload: { item: Coffee } }
  | { type: "remove"; payload: { item: string } };

type Dispatch = (action: Action) => void;
type State = {
  totalPrice: number;
  items: Coffee[] | [];
};
type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case "decrement": {
      const itemToDecrement = state.items.map((item) =>
        item.name == action.payload.item
          ? { ...item, quantity: item.quantity > 0 ? item.quantity-- : 0 }
          : item
      );

      const sum = itemToDecrement
        .map((item) => item.quantity * item.price)
        .reduce((partialSum, a) => partialSum + a, 0);

      return { ...state, items: itemToDecrement, totalPrice: sum };
    }
    case "increment": {
      const hasCoffee = state.items.find(
        (item) => item.name == action.payload.item.name
      );
      if (hasCoffee) {
        const newState = state.items.map((item) =>
          item.name == hasCoffee.name
            ? { ...item, quantity: item.quantity++ }
            : item
        );

        const sum = newState
          .map((item) => item.quantity * item.price)
          .reduce((partialSum, a) => partialSum + a, 0);

        return { ...state, items: newState, totalPrice: sum };
      }
      const sum = state.items
        .map((item) => item.quantity * item.price)
        .reduce((partialSum, a) => partialSum + a, 0);

      return {
        ...state,
        items: [...state.items, action.payload.item],
        totalPrice: sum,
      };
    }
    case "remove": {
      const removeItem = state.items.filter(
        (item) => item.name != action.payload.item
      );

      const sum = removeItem
        .map((item) => item.quantity * item.price)
        .reduce((partialSum, a) => partialSum + a, 0);

      return { ...state, items: removeItem, totalPrice: sum };
    }
    default: {
      return state;
    }
  }
}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, {
    totalPrice: 0,
    items: [],
  });

  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
