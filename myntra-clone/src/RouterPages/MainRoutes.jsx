import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import WomensPage from "../Pages/WomensPage/WomensPage";
import MensPage from "../Pages/MensPage/MensPage";
import WomenSingle from "../Pages/WomensPage/WomenSingle";
import MenSinglePage from "../Pages/MensPage/MenSinglePage";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route extact path="/" element={<Home />} />
      {/* <Route path="/Mens" element={<Mens />} /> */}
      <Route path="/womens" element={<WomensPage />} />
      <Route path="/womens/:id" element={<WomenSingle />} />
      <Route path="/mens" element={<MensPage />} />
      <Route path="/mens/:id" element={<MenSinglePage />} />
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/cart" element={<Cart/>}/>

      {/* fun(el)=>
      {axios
        .post("url", el)
        .then((res) => {
          console.log(res);
        })
        .catch()} */}
      {/* axios.post("url",{}).then((res)=>{console.log(res)}).catch() */}
    </Routes>
  );
};

export default MainRoutes;
