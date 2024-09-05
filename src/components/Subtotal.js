// import React, { useContext } from "react";
// import "./Subtotal.css";
// import ShoppingContext from "./context/shopping/shoppingContext";
// const Subtotal = () => {
//   const shoppingContext = useContext(ShoppingContext);
//   const { basket, getBasketTotal } = shoppingContext;
//   console.log(getBasketTotal(basket));
//   const handleTest = (e) => {
//     e.preventDefault();
//     console.log(getBasketTotal([]));
//   };

//   return (
//     <div className="subtotal">
//       <p>
//         Subtotal ({basket?.length} items:{" "}
//         <strong>${getBasketTotal(basket)}</strong>)
//       </p>
//       <small className="subtotal_gift">
//         <input type="checkbox" />
//         This order contains a gift
//       </small>
//       <button >Test Total</button>
//       <button>Proceed to checkout</button>
//     </div>
//   );
// };

// export default Subtotal;

import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useHistory } from "react-router-dom";
import ShoppingContext from "./context/shopping/shoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  // const handleTest = (e) => {
  //   e.preventDefault();
  //   console.log(getBasketTotal(basket));
  // };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}
              items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />

      {/* <button onClick={handleTest}>Test Total</button> */}
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
