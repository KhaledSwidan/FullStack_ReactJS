import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './components/check out/CheckOut';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LogIn from './components/log in/LogIn';
import Payment from './components/payment/Payment';
import { useAuth } from './context/GlobalContext';
import { auth } from "./firebase";

const App = () =>
{
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
              <Payment />
            </>}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
};

export default App