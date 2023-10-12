import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  //map thru basket and accumulate the total
  const total = basket.reduce((sum, item) => sum + item.price, 0);

  // Function to format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal({basket.length} items):{" "}
        <strong>{formatCurrency(total)}</strong>
      </p>

      <small className="subtotal_gift">
        <input type="checkbox" />
        This Order Contains a gift
      </small>

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
