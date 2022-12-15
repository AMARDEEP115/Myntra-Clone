import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBestOfMyntra,
  getCategoriesData,
  getdealsOflaatestArival,
  getDealsOftheData,
  getGiftingCards,
  getNewTopBrands,
  getTopInInfluncerExclusive,
  getTopPicksData,
} from "../../redux/Home/actions";
import BestOfMyntra from "./BestOfMyntra";
import CategoriesToBag from "./CategoriesToBag";
import DealOftheDayCard from "./DealOftheDayCard";
import { SlideShow } from "./Slider";
import TopPicks from "./TopPicks";
const divStyle = {
  textAlign: "start",
  letterSpacing: ".15em",
  textTransform: "uppercase",
  color: "#3e4152",
  letterSpacing: ".15em",
  fontSize: "1.8em",
  margin: "-50px 10px 0px -250px",
  // height:"400px",
  maxHeight: "10em",
  fontWeight: "500",
};
function InnerContent() {
  const dealsOftheDay = useSelector((state) => state.home.dealsOftheDay);
  const bestofMyntra = useSelector((state) => state.home.bestOfMyntra);
  const topPicks = useSelector((state) => state.home.topPicks);
  const categoriesToBag = useSelector((state) => state.home.gategoriesToBag);
  const giftingCards = useSelector((state) => state.home.giftingCards);
  const dealsoflatestarival = useSelector(
    (state) => state.home.dealsoflatestarival
  );
  const newintopbrands = useSelector((state) => state.home.newintopbrands);
  const topinfluncerseclusive = useSelector(
    (state) => state.home.topinfluncerseclusive
  );

  // console.log("data", dealsOftheDay);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://localhost:8080/dealsofthday`)
      .then((res) => res.json())
      .then((res) => dispatch(getDealsOftheData(res)))
      .catch((e) => console.log(e));
    fetch(` http://localhost:8080/bestOfMyntra`)
      .then((res) => res.json())
      .then((res) => dispatch(getBestOfMyntra(res)))
      .catch((e) => console.log(e));
    fetch(` http://localhost:8080/topPicks`)
      .then((res) => res.json())
      .then((res) => dispatch(getTopPicksData(res)))
      .catch((e) => console.log(e));
    fetch(`http://localhost:8080/categoriesToBag`)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e));
    fetch(`http://localhost:8080/categoriesToBag`)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e));
    fetch(`http://localhost:8080/GiftingCards`)
      .then((res) => res.json())
      .then((res) => dispatch(getGiftingCards(res)))
      .catch((e) => console.log(e));
    fetch(` http://localhost:8080/dealsoOnLatestArival`)
      .then((res) => res.json())
      .then((res) => dispatch(getdealsOflaatestArival(res)))
      .catch((e) => console.log(e));
    fetch(`http://localhost:8080/newInTopBrands`)
      .then((res) => res.json())
      .then((res) => dispatch(getNewTopBrands(res)))
      .catch((e) => console.log(e));
    fetch(` http://localhost:8080/topInfluencerExclusiveStyles`)
      .then((res) => res.json())
      .then((res) => dispatch(getTopInInfluncerExclusive(res)))
      .catch((e) => console.log(e));
  }, [dispatch]);
  return (
    <div>
      <SlideShow />
      <div>
        <div style={divStyle}>
          {" "}
       <img style={{  width:"100%"}} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/8/c31bd037-958b-40fa-bdaf-3f0fc1c71ce21670497018730-Crazy-deals-DK.jpg" alt="" />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(10, auto) ",
          }}
        >
          {dealsOftheDay.map((e) => (
            <DealOftheDayCard {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
         <img style={{width:"100%", marginTop:"70px"}}  src="https://assets.myntassets.com/f_webp,w_603,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/246a6b35-8899-43ba-9f97-2ea0ac5a88ba1670406285563-Super-Savings-Zone.jpg" alt="" />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(8, auto) ",
          }}
        >
          {bestofMyntra.map((e) => (
            <BestOfMyntra {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
         <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/28cff5a2-9d32-42f6-b160-64617ea62e211670406647314-Top-Listed-Styles.jpg" alt="" />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(7, auto) ",
          }}
        >
          {topPicks.map((e) => (
            <TopPicks {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
       <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/418510b5-16fc-4853-9323-1785df1a38ce1670406564990-Never-Seen-Before-Offers.jpg" alt="" />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(8, auto) ",
            rowGap: "0px",
          }}
        >
          {categoriesToBag.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/7/3a8ff13b-934d-4ad3-b73f-bb64660dd82a1670406141566-SALE-Sectional-Header_1-Line-----7.jpg" alt="" />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(10, auto) ",
            rowGap: "0px",
          }}
        >
          {giftingCards.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>TOP INFLUENCERS EXCLUSIVE STYLES</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(6, auto) ",
            rowGap: "0px",
          }}
        >
          {topinfluncerseclusive.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>NEW IN TOP BRANDS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(8, auto) ",
            rowGap: "0px",
          }}
        >
          {newintopbrands.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
        <div style={divStyle}>
          {" "}
          <h4>DEALS ON LATEST ARRIVALS</h4>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(2, auto) ",
            rowGap: "0px",
          }}
        >
          {dealsoflatestarival.map((e) => (
            <CategoriesToBag {...e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerContent;
