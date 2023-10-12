import React from "react";
import "./Header.css";
import IconSearch from "./IconSerch";
import IconShoppingCart from "./IconShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}] = useStateValue();
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchIn" placeholder="Search FavouriteBrands,Deals,and Accessories" />
        <IconSearch className="header_searchIcon" />
      </div>

      <div className="header_navbar">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">SignIn</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to='/cart'>
        <div className="header_option">
          <IconShoppingCart className="header_option_cart" />
          
          <span className="header_count_cart">{basket?.length}</span>
        </div>
        </Link>
        <div className="searchbar_sm"> 
        <input type="text" className="header_searchIn_sm" placeholder="Search FavouriteBrands,Deals,and Accessories" />
        <IconSearch className="header_searchIcon header_searchIcon_sm" />
        </div>
      </div>
    </div>
  );
}

export default Header;
