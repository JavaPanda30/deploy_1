import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, price, image, star }) {

  const [{basket},dispatch] = useStateValue();

  console.log(basket);

  const addtocart=()=>{
    //dispatch action on clicking the button into reducer
    dispatch({
      type:"ADD_TO_CART",
      item:{
        id:id,
        title:title,
        price:price,
        image:image,
        star:star,
      },
    })
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>

        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_star">
          {Array(star)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img
        src={image}
        alt="product_preview"
      />
      <button onClick={addtocart}>Add to Cart</button>
    </div>
  );
}

export default Product;
