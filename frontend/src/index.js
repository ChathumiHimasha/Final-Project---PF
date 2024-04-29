import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LoginPage from './comp/LoginPage/login_Page';
import SignupPage from './comp/SignUpPage/signup_page';
import Product from './comp/product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/app" element={<App/>}/>
      <Route path="/shop" element={<Product/>}/>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


