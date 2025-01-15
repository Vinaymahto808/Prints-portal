import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SignupPage from './Components/auth/SignupPage';
import LoginPage from './Components/auth/LoginPage';
import AdminDashboard from './Components/AdminDashboard';
import Nopage from './Nopage';

import './App.css';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
    </>
  
  )
}

const RouteHandler = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Components/auth/signUp" element={<SignupPage />} />
      <Route path="/Components/auth/LoginPage" element={<LoginPage />} />
      <Route path="/Components/AdminDashboard" element={< AdminDashboard />} />
     <Route path="*" element={<Nopage />} />
   </Routes>

  )
}

export default App