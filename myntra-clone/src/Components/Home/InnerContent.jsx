import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestOfMyntra,
  getCategoriesData,
  getDealsOftheData,
  getTopPicksData,
} from "../../REDUX/action";
import BestOfMyntra from "./BestOfMyntra";
import CategoriesToBag from "./ShopByCategories";
import DealOftheDayCard from "./DealOftheDayCard";
import { SlideShow } from "./Slider";
import TopPicks from "./TopPicks";
const divStyle = {
  textAlign: "start",
  letterSpacing: "15rem",
  textTransform: "uppercase",
  color: "#3e4152",
  letterSpacing: ".15em",
  fontSize: "1.8em",
  margin: "-10px 20px 0px -250px",
  maxHeight: "10em",
  fontWeight: "500",
};
function InnerContent() {
  const dealsOftheDay = useSelector((state) => state.home.dealsOftheDay);
  const bestofMyntra = useSelector((state) => state.home.bestOfMyntra);
  const topPicks = useSelector((state) => state.home.topPicks);
  const categoriesToBag = useSelector((state) => state.home.gategoriesToBag);

  // console.log("data", dealsOftheDay);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://myntra12.onrender.com/api/dealsofthday`)
      .then((res) => res.json())
      .then((res) => dispatch(getDealsOftheData(res)))
      .catch((e) => console.log(e));
    fetch(`https://myntra12.onrender.com/api/bestOfMyntra`)
      .then((res) => res.json())
      .then((res) => dispatch(getBestOfMyntra(res)))
      .catch((e) => console.log(e));
    fetch(`https://myntra12.onrender.com/api/topPicks`)
      .then((res) => res.json())
      .then((res) => dispatch(getTopPicksData(res)))
      .catch((e) => console.log(e));
    fetch(`https://myntra12.onrender.com/api/categoriesToBag`)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e));
  }, [dispatch]);
  return (
    <div>
      <SlideShow />
      <div>
        <div style={divStyle}>
          {" "}
          <h1 style={{ marginLeft: "600px", fontSize: "50px" }}>
            DEALS ON TOP BRANDS
          </h1>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(10, auto) ",
            cursor: "pointer",
          }}
        >
          {dealsOftheDay.map((e) => (
            <DealOftheDayCard {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h1 style={{ marginLeft: "650px", fontSize: "50px" }}>
            SUPER SAVING ZONE
          </h1>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(10, auto) ",
            cursor: "pointer",
          }}
        >
          {bestofMyntra.map((e) => (
            <BestOfMyntra {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h1 style={{ marginLeft: "300px", fontSize: "50px" }}>
            SPRING SUMMER 2022- FIRST ON MYNTRA
          </h1>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(8, auto) ",
            cursor: "pointer",
          }}
        >
          {topPicks.map((e) => (
            <TopPicks {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h1 style={{ marginLeft: "600px", fontSize: "50px" }}>
            CATEGORIES TO BAG
          </h1>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(8, auto) ",
            rowGap: "0px",
            cursor: "pointer",
          }}
        >
          {categoriesToBag.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerContent;
