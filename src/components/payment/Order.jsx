import moment from "moment";
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckOutProduct from '../check out/CheckOutProduct';
import "./payment.css";

const Order = ({ order }) =>
{
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM DO YYYY h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckOutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={val => <h3 className="order-total">Order Total: {val}</h3>}
        decimalScale={2}
        value={order.data.amount * 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;