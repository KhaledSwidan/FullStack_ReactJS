import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import LogIn from './components/log in/LogIn';
import { auth } from "./firebase";

const App = () =>
{
  // useEffect(()=>{
  //   auth.onAuthStateChange
  // },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
};

export default App