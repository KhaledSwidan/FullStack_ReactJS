import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { React, useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../../context/AppReducer';
import { useAuth } from '../../context/GlobalContext';
import { axios } from "../axios";
import CheckOutProduct from '../check out/CheckOutProduct';
import "./payment.css";

const Payment = () =>
{
  const { basket, user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(""); // payment processing;

  const stripe = useStripe(); //for cofirmation step;
  const elements = useElements(); // = masterCard;

  useEffect(() =>
  {
    const getClientSecret = async () =>
    {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = e =>
  {
    e.preventDefault();
  };
  const handleChange = e =>
  {
    setDisabled(e.empty); //make disable state empty; //start buying;
    setError(error ? error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout <Link to="/checkout">{basket.length} items</Link>
        </h1>
        {/* Delivery Address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Alexandria, Egypt</p>
          </div>
        </div>
        {/* Review Items*/}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items</h3>
          </div>
          <div className="payment-items">
            {basket.map(item =>
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            )}
          </div>
        </div>
        {/* Payment method*/}
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={val => <h3>Order Total : {val}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment