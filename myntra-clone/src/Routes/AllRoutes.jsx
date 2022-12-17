import React from "react";
import { Routes, Route } from "react-router-dom";
import SingalData from "../Pages/SingalData";
import Home from "../Pages/Home";
import Mens from "../Pages/Mens";

const AllRoutes = () => {
  return (
    <Routes>
      <Route extact path="/" element={<Home />} />
      <Route path="/Mens" element={<Mens />} />
      <Route path="/SingalData" element={<SingalData/>}  />
    </Routes>
  );
};

export default AllRoutes;
