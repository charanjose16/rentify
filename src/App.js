// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import HomePage from './pages/HomePage';
import SellerPage from './pages/SellerPage';
import BuyerPage from './pages/BuyerPage';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import PropertyDetails from './pages/PropertyDetails';
import ForgetPw from './pages/ForgetPw';


const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/homepage" element={<HomePage />} />
    <Route path="/sellerpage" element={<SellerPage />} />
    <Route path="/buyerpage" element={<BuyerPage />} />
    <Route path="/addproperty" element={<AddProperty />} />
    <Route path="/editproperty" element={<EditProperty />} />
    <Route path="/propertydetails" element={<PropertyDetails />} />
    <Route path="/forgetpw" element={<ForgetPw />} />
  
  </Routes>
);

export default App;
