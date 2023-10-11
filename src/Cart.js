import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";
import CartItems from "./CartItems";

function Cart() {
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Event/Train_GW_editorial_2300x646._CB575880778_.jpg"
          alt=""
        />
        <div>
          <h2 className="cart_title">Your Shopping Cart</h2>
          <CartItems/>
        </div>
      </div>

      <div className="cart_right">
        <h2 className="cart_subtotal">
          <Subtotal />
        </h2>
      </div>
    </div>
  );
}

export default Cart;
