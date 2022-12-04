import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../../context/AppReducer';
import { useAuth } from '../../context/GlobalContext';
import "./checkOut.css";

const SubTotal = () =>
{
  const { basket } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={val => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{val}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal