import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
    <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
   </Routes>
  )
}

export default Routers