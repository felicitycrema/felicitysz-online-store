import React from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title=" Xbox Series S and Rocket League Bundle - Includes Xbox
          Wireless Controller - Includes Fort & Rocket League Downloads -
          10GB RAM 512GB SSD - Up to 120 frames per second - Experience hi"
          image="https://m.media-amazon.com/images/I/51cN7sQ3aQL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
          price={376.0}
        />
        <Product
          id="2"
          title="tounee Telescopic Laptop Stand for Desk with 360° Swivel Base, Sit to Stand, Height Adjustable, Portable Riser Holder for Good Posture, Compatible with MacBook Pro, All Laptops 10-17"
          image="https://m.media-amazon.com/images/I/61BilDos9dL._AC_SY879_.jpg"
          rating={5}
          price={49.99}
        />
        <Product
          id="3"
          title="Gaming Keyboard and Mouse and Mouse pad and Gaming Headset, Wired LED RGB Backlight Bundle for PC Gamers Users - 4 in 1 Gift Box Edition Hornet RX-250"
          image="https://m.media-amazon.com/images/I/71S-pQNQyIL._AC_SL1500_.jpg"
          rating={6}
          price={3063.06}
        />
        <Product
          id="4"
          title="havit HV-F2056 15.6 -17inch Laptop Cooler Cooling Pad - Slim Portable USB Powered (3 Fans), Black/Blue"
          image="https://m.media-amazon.com/images/I/71jUT5npz-L._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
          price={27.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="21"
          title="XREAL Air 2 Pro AR Glasses, The Ultimate Wearable Display with 3-level Electrochromic Dimming, 75g 120Hz 130"
          image="https://m.media-amazon.com/images/I/51ye22RVvYL._AC_UL480_QL65_.jpg"
          rating={18}
          price={12095.0}
        />
        <Product
          id="45"
          title="LLEVTIC Computer Speakers, Desktop Speakers with 6 Colorful RGB Lights, Volume Control PC Speakers, USB Powered Gaming Speakers with 3.5mm Aux Cable for PC Monitor Laptop Tablet Phone"
          image="https://m.media-amazon.com/images/I/61ROQtzmEzL._AC_SX679_.jpg"
          rating={5}
          price={1643.84}
        />
        <Product
          id="76"
          title="Triple Laptop Screen Extender, [M1/M2/Windows] [Only 1 Cable to Connect], Laptop Monitor Extender for Mac/Windows, 1080P | FHD IPS | Ultra-thin Bezel, Powered by Type-C/USB, for 13.3”-17.3” Laptop"
          image="https://m.media-amazon.com/images/I/71N2AKFAkNL._AC_SX679_.jpg"
          rating={7}
          price={349.99}
        />
        <Product
          id="90"
          title="Ji_nfili Sleep Sport Car Shaped Wireless Computer Mouse Ergonomic Gaming Optical Mouse USB 2.4G Mini Receiver Office Accessories for PC Windows Laptop Notebook Mac"
          image="https://m.media-amazon.com/images/I/418RZi0UVdL._AC_.jpg"
          rating={5}
          price={934.77}
        />
      </div>
      <div className="products_row">
        <Product
          id="ghj678bv886"
          title="Dell P3223QE 4K UHD USB-C Hub LED LCD 31.5-Inch Monitor, Black/Silver"
          image="https://m.media-amazon.com/images/I/71l4-kdrq4L._AC_UL480_FMwebp_QL65_.jpg"
          rating={6}
          price={14999.99}
        />

        <Product
          id="hgy"
          title="Apple Watch Series 9 (GPS 41mm) Smartwatch with Midnight Aluminum Case
          with Midnight Sport Band M/L. Fitness Tracker, Blood Oxygen & ECG
          Apps, Always-On Retina Display"
          image="https://m.media-amazon.com/images/I/71UWyLPfGJL._AC._SR360,460.jpg"
          rating={4}
          price={9867.0}
        />
        <Product
          id="12584"
          title="Meta Quest 2 Advanced All-In-One 128GB Virtual Reality Headset"
          image="https://m.media-amazon.com/images/I/416t1WYMlTL._AC_UL480_QL65_.jpg"
          rating={2}
          price={425.0}
        />
        <Product
          id="234"
          title="Manfrotto VR, Virtual Reality VR Tripod, Aluminum (MTALUVR)"
          image="https://m.media-amazon.com/images/I/518ye2jLFPL._AC_UL480_QL65_.jpg"
          rating={2}
          price={1699.0}
        />
      </div>
      <div className="product_row">
        <Product
          id="85"
          title="Gold Bug 2 Combo, Gold Detector, Metal Detector, Black"
          image="https://m.media-amazon.com/images/I/514seFYX88L._AC_UL480_QL65_.jpg"
          rating={7}
          price={14499.0}
        />
        {/* <Product
          id="78"
          title="CBStyles i5 White Tiger Gaming Beast"
          image="https://m.media-amazon.com/images/I/81FYNutRUTL._AC_UL480_QL65_.jpg"
          rating={4}
          price={24950.0}
        />
        <Product
          id="134"
          title="XREAL Air 2 Pro AR Glasses, The Ultimate Wearable Display with 3-level Electrochromic Dimming, 75g 120Hz 130"
          image="https://m.media-amazon.com/images/I/51ye22RVvYL._AC_UL480_QL65_.jpg"
          rating={18}
          price={12095.0}
        />
        <Product
          id={134}
          title="XREAL Air 2 Pro AR Glasses, The Ultimate Wearable Display with 3-level Electrochromic Dimming, 75g 120Hz 130"
          image="https://m.media-amazon.com/images/I/51ye22RVvYL._AC_UL480_QL65_.jpg"
          rating={18}
          price={12095.0}
        /> */}
      </div>
    </>
  );
};

export default Products;
