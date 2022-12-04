import React from 'react';
import { useAuth } from '../../context/GlobalContext';
import starIcon from "../../images/star.png";
import "./checkOut.css";

const CheckOutProduct = ({ id, image, title, price, rating, hiddenButton }) =>
{
  const { dispatch } = useAuth();
  const removeFromBasket = () => dispatch(
    {
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={starIcon} alt="" />
              </p>
            ))}
        </div>
        {!hiddenButton && (<button onClick={removeFromBasket}>Remove from Basket</button>)}
      </div>
    </div>
  );
};

export default CheckOutProduct;