import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route extact path="/" element={<Home />} />

    </Routes>
  );
};

export default AllRoutes;
