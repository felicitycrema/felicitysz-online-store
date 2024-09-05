import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { useEffect, useContext } from "react";
import Header from "./components/layout/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ShoppingContext from "./components/context/shopping/shoppingContext";
import Checkout from "./components/Checkout";
import CheckoutProduct from "./components/CheckoutProduct";
import Payment from "./components/Payment";
import { auth } from "./components/firebase";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51PfLldI3GLyic3mgEGEmfHQhnQElgJ9SkBlq5pT9zBGZPNU79o5MGibFezcj6lCiPl92Bp076GCDUe7ortUBBeh600EXNGbOnQ"
);
const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    }))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/products" exact>
              <Products />
            </Route>

            <Route path="/products/:id" exact>
              <ProductDetails />
            </Route>

            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path='/orders'>
            <Elements stripe={promise}>
            <Orders />
            </Elements>
          </Route>

            <Route path="/checkout-product">
              <CheckoutProduct />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            
            <Route path="/login">
              <Login />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
