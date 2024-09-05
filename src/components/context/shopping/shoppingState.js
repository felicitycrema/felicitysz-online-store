import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  // Selectors
  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const removeFromBasket = (item) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: item });
  };

  const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
  };

  const setUser = (user) => {
    console.log("User payload:", +user);
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
