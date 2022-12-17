import React,{ useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import StarIcon from "@mui/icons-material/Star";
import {
  DetailsMainDiv,
  ImageContainer,
  Img,
  SizesDIv,
  ImgDiv,
  SubDetailsDiv,
  WishDiv,
  BagDiv,
  RatingDiv,
} from "./detailStyled";


function Details() {
  const [data, setData] = useState({});

  const getData = async () => {
    let res = await fetch(`https://scary-fly-gilet.cyclic.app/men/${11}`);
    let datas = await res.json();
    console.log(datas);
    setData(datas);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
  
            <DetailsMainDiv >
              <ImageContainer>
                <ImgDiv>
                  <Img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2187783/2021/11/9/de450532-9acd-4039-9e21-4f77569fb01c1636448588262-HERENOW-Women-Navy-Blue-Printed-Top-4911636448587796-1.jpg" />
                </ImgDiv>
                <ImgDiv>
                  <Img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2187783/2021/11/9/de450532-9acd-4039-9e21-4f77569fb01c1636448588262-HERENOW-Women-Navy-Blue-Printed-Top-4911636448587796-1.jpg" />
                </ImgDiv>
                <ImgDiv>
                  <Img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2187783/2021/11/9/de450532-9acd-4039-9e21-4f77569fb01c1636448588262-HERENOW-Women-Navy-Blue-Printed-Top-4911636448587796-1.jpg" />
                </ImgDiv>
                <ImgDiv>
                  <Img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2187783/2021/11/9/de450532-9acd-4039-9e21-4f77569fb01c1636448588262-HERENOW-Women-Navy-Blue-Printed-Top-4911636448587796-1.jpg" />
                </ImgDiv>
              </ImageContainer>
              <SubDetailsDiv>
                <div style={{ width: "95%", margin: "auto" }}>
                  <div style={{ textAlign: "left" }}>
                    <div>
                      <b>
                        {" "}
                        <p
                          style={{
                            fontSize: "24px",
                            margin: "25px 0px -15px 0px ",
                            color: "darkslategray",
                          }}
                        >
                         
                     HERE&NOW
                        </p>
                      </b>
                      <p style={{ fontSize: "20px", color: "#8b8d97" }}>
                      Women Navy Blue Printed Top
                      </p>
                    </div>
                    <RatingDiv>
                      <div
                        style={{
                          display: "flex",
                          gap: "2px",
                          alignItems: "center",
                          width: "40px",
                        }}
                      >
                        <b>
                          {" "}
                          <p> 4.9 </p>
                        </b>
                        <p style={{ color: "#48958f" }}>
                          <StarIcon fontSize="small" />
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#8b8d97",
                          alignItems: "center",
                          alignSelf: "center",
                        }}
                      >
                        {" "}
                        <p> | 4.2k  Ratings</p>
                      </div>
                    </RatingDiv>
                  </div>
                  <hr></hr>
                  <div style={{ textAlign: "left", marginTop: "-5px" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        width: "270px",
                      }}
                    >
                      <p>
                       
                        <b
                          style={{ color: "darkslategray", fontSize: "22px" }}
                        >₹499</b>
                      </p>
                      <p
                        style={{
                          color: "#8b8d97",
                          fontSize: "18px",
                          marginTop: "19px",
                        }}
                      >
                        <span style={{ textDecoration: "line-through" }}>
                        ₹1000
                        </span>
                      </p>
                      <p style={{ color: "#ee9d20" }}>
                        <b style={{ fontSize: "22px" }}>
                          {" "}
                          {`(₹50%OFF)`}{" "}
                        </b>
                      </p>
                    </div>
                    <div
                      style={{
                        marginTop: "-18px",
                        color: "#79a987",
                        fontSize: "14px",
                        marginTop: "0px",
                      }}
                    >
                      <b>inclusive of all taxes</b>
                    </div>
                  </div>
                  <div style={{ textAlign: "left", marginTop: "5px" }}>
                    <div
                      style={{
                        display: "flex",
                        width: "300px",
                        fontWeight: "500",
                        justifyContent: "space-between",
                        fontSize: "16px",
                        marginTop: "-5px",
                      }}
                    >
                      <p>SELECT SIZE </p>

                      <p
                        style={{
                          color: "#e7396a",
                          fontSize: "15px",
                          marginTop: "18px",
                          cursor: "pointer",
                          fontWeight: "700",
                        }}
                      >SIZE CHART</p>
                    </div>
                    <div style={{display:"flex" ,gap: "10px"}}>
                    <button style={{ borderRadius: "100PX" , padding:"10px 8px 10px 8px" , textAlign:"center"}}>
                    XS Rs 494
                    </button>
                    <button style={{borderRadius: "50PX" , padding:"10px 8px 10px 8px" , textAlign:"center" }}>
                    S Rs 494
                    </button>
                    <button style={{ borderRadius: "50PX"  , padding:"10px 8px 10px 8px" , textAlign:"center" }}>
                    M Rs 494
                    </button>
                    <button style={{ borderRadius: "50PX" , padding:"10px 8px 10px 8px" , textAlign:"center"}}>
                    L Rs 494
                    </button>
                    <button style={{borderRadius: "50PX"  , padding:"10px 8px 10px 8px" , textAlign:"center"}}>
                    XL Rs 494
                    </button>
                    </div>
                    <button style={{ borderRadius: "50PX", marginLeft:"18px"  , padding:"10px 8px 10px 8px" , textAlign:"center"}}>
                    XXL Rs 494
                    </button>
              
  
                  </div>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      gap: "20px",
                    }}
                  >
                    <BagDiv>
                      <ShoppingBagIcon />
                      <p>
                        <b>ADD TO BAG</b>
                      </p>
                    </BagDiv>
                    <WishDiv>
                      <div style={{ color: "gray" }}>
                        <FavoriteBorderIcon />
                      </div>
                      <b>
                        {" "}
                        <p>WISHLIST</p>
                      </b>
                    </WishDiv>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "200px",
                      marginTop: "15px",
                      gap: "14px",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>
                      DELIVERY OPTIONS
                    </p>
                    <div style={{ color: "gray" }}>
                      <LocalShippingOutlinedIcon />
                    </div>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        height: "35px",
                        alignItems: "center",
                        textAlign: "left",
                        border: "0.2px solid lightgray",
                        display: "flex",
                        gap: "15px",
                        borderRadius: "4px",
                        fontSize: "15px",
                        justifyContent: "space-between",
                        width: "240px",
                        padding: "5px",
                      }}
                    >
                      <input
                        placeholder="Enter pincode"
                        style={{
                          height: "100%",
                          border: "none",
                          width: "120px",
                          fontWeight: "200",
                          fontSize: "18px",
                        }}
                      ></input>
                      <p style={{ color: "#e7396a", fontWeight: "600" }}>
                        CHECK
                      </p>
                    </div>
                    <p style={{ marginTop: "2px", color: "#696969" }}>
                      Please enter PIN code to check delivery time & Pay on
                      Delivery Availability
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "460",
                    }}
                  >
                    <p>100% Original Products</p>
                    <p>Pay on delivery might be available</p>
                    <p>Easy 30 days returns and exchanges</p>
                    <p>Try & Buy might be available</p>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      color: "darkslategray",
                      fontSize: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <p>
                        <b style={{ fontSize: "16px", color: "black" }}>
                          BEST OFFERS
                        </b>{" "}
                      </p>
                      <div style={{ color: "gray" }}>
                        <LocalOfferOutlinedIcon />
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: "16px",
                        marginTop: "-5px",
                        color: "black",
                      }}
                    >
                      {" "}
                      <b style={{ fontSize: "16px" }}>
                        Best Price:
                        <span style={{ color: "#ee9d20", fontSize: "16px" }}>
                          {" "}
                          Rs. 499
                        </span>
                      </b>
                    </p>
                    <ul>
                      <li style={{ background: "white" }}>
                        Applicable on: Orders above Rs. 3999 (only on first
                        purchase)
                      </li>
                      <li>
                        Coupon code:<b style={{ color: "black" }}> MYNTRA10</b>
                      </li>
                      <li>
                        Coupon Discount: 10% off upto Rs. 600 (check cart for
                        final savings)
                      </li>
                    </ul>
                    <p style={{ color: "#e7396a", fontWeight: "570" }}>
                      View Eligible Products
                    </p>
                    <p>
                      <b>EMI option available</b>
                    </p>
                    <ul>
                      <li>EMI starting from Rs.154/month</li>
                    </ul>
                    {/* <p style={{ color: "#e7396a", fontWeight: "570" }}>
                      View Plan
                    </p> */}
                  </div>
                </div>
              </SubDetailsDiv>
            </DetailsMainDiv>
        
         
        );
}

export default Details;
