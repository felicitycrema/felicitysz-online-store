import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { useEffect, useContext } from "react";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ShoppingContext from "./components/context/shopping/shoppingContext";
import { auth } from "./components/firebase";

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", +authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
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
