import React from "react";
import Footer from "../Components/Footer";
import InnerContent from "../Components/Home/InnerContent";
import Navbar from "../Components/Navbar";


function Home() {
  return (
    <div>
      <Navbar/>
      <InnerContent />
      <Footer/>
    </div>
  );
}

export default Home;
