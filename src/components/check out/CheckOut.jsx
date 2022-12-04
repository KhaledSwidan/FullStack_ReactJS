import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/GlobalContext';
import checkOutImg from "../../images/checkoutAd.jpg";
import "./checkOut.css";
import CheckOutProduct from './CheckOutProduct';
import SubTotal from './SubTotal';

const CheckOut = () =>
{
  const { user, basket } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkOutImg} alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
                You have no items in your basket.
                <div className='checkoutProduct-info'>
                <button onClick={()=>navigate("/")}>Return To Home Page</button>
                </div>
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;