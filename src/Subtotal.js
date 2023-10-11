import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {

  const [{ basket }] = useStateValue();
  const total = basket.reduce((acc, item) => acc + item.price, 0);
  return ( 
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>₹{value}</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeperator={true}
        Prefix={"₹"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
