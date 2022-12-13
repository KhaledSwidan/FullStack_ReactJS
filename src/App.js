import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './components/check out/CheckOut';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LogIn from './components/log in/LogIn';
import Orders from './components/payment/Orders';
import Payment from './components/payment/Payment';
import { useAuth } from './context/GlobalContext';
import { auth } from "./firebase";

const App = () =>
{
  const stripePromise = loadStripe("pk_test_51MBN9qBDX8XNVVB6bU6RizOu3tXB47Q1UQPNS0NWBqz4NMiDsywNK94ki64ceiC7MNiSlJohY1aL9MBddK9T6vas00yqRM3rv6");
  const { dispatch } = useAuth();

  useEffect(() =>
  {
    auth.onAuthStateChanged(authUser =>
    {
      if (authUser) dispatch({
        type: "SET_USER",
        user: authUser
      })
      else dispatch({
        type: "SET_USER",
        user: null
      })
    })
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <>
              <Header />
              <Home />
            </>}
        />
        <Route path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
            </>}
        />
        <Route path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </>}
        />
        <Route path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
};

export default App