import React from "react";
import Filter from "../Components/WomensPage/Filter";
import "./WomensPage.css"
const WomensPage=()=>{
    // {
    //   "id": 13,
    //   "categories": "kurta",
    //   "size": "Sizes : 39, 40, 42, 44...",
    //   "title": "Men Grey & Blue Self Design Kurta with Churidar & Nehru Jacket",
    //   "price": "2199",
    //   "gender": "men",
    //   "sizes": [
    //     "S",
    //     "M",
    //     "L",
    //     "XL",
    //     "XXL"
    //   ],
    //   "description": "",
    //   "brand": "Clovia",
    //   "color": "white",
    //   "discount": 60,
    //   "off_price": 5499,
    //   "images": {
    //     "image1": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/c18ee8eb-06f6-4d10-8f4a-680ac10fccf21527055151093-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-1.jpg",
    //     "image2": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/81b26584-a36d-414d-9653-195b978884141527055151039-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-3.jpg",
    //     "image3": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/f6d3d7cd-1acc-4e28-b8ee-29e5d9cec46c1527055151075-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-2.jpg",
    //     "image4": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/83986b07-a78e-4999-b2bd-7bacbd5532411527055151001-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-4.jpg"
    //   },
    return (
      <div className="womenspage">
        <div className="sort-head">
          <div style={{ marginLeft: "2rem" }}>FILTERS</div>
          <div style={{ marginRight: "2rem" }}>
            <select
              style={{
                width: "250px",
                padding: "9px 0px",
                border: "0.5px solid grey",
              }}
              name=""
              id=""
            >
              <option>Sort By:Recommendation</option>
              <option>Price:Low to High</option>
              <option>Price:High to Low</option>
            </select>
          </div>
        </div>
        <div className="product-section">
          <div className="filter-section">
            <Filter />
          </div>
          <div className="products"></div>
        </div>
      </div>
    );
}

export default WomensPage;