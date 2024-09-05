import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import { auth } from "../firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header_option">
        <div className="delivery_option">
          <div className="location_icon">
            <LocationOnIcon />
          </div>

          <div className="location_text">
            <span className="header_optionOne">
              Delivering to Johannesburg 2000
            </span>
            <span className="header_optionTwo">South Africa</span>
          </div>
        </div>
      </div>

      <div className="header_search">
        <button className="header_search_all">
          All
          <ArrowDropDownIcon />
        </button>
        <input
          className="header_input"
          type="text"
          placeholder="Search Amazon"
        />
        <button className="header_searchIcon">
          <SearchIcon />
        </button>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} onClick={handleAuthentication}>
          <div className="header_option">
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Accounts</span>
          <span className="header_optionTwo">& Lists</span>
          <ArrowDropDownIcon />
        </div>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <Link to="/checkout" className="option_basketLink">
          <div className="header_optionBasket">
            <span className="header_shoppingBasket">
              <ShoppingBasketIcon />
            </span>
            <span className="header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
