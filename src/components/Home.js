import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="Shop kitchen favorite"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
