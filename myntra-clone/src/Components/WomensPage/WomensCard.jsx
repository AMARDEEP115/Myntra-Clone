import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import "./WomensCard.css";

const WomensCard = ({ womensData }) => {
  // console.log(womensData.images);
  // (el.count / 100).toFixed(1);

  return (
    <div className="womens-card">
      <div className="card">
        <div className="hover-animation">
          <div>
            <div
              style={{
                position: "absolute",
                marginTop: "15rem",
                marginLeft: "1rem",
                background: "white",
                padding: "3px 6px",
              }}
            >
              {womensData.rating} <StarIcon boxSize={3} color="#4FD1C5" /> |{" "}
              {(womensData.count / 100).toFixed(1)}k
            </div>

            <img
              src={womensData.images.image1}
              alt=""
              className="front-image"
            />
          </div>
          <div className="overlay overlay-bottom">
            <div className="text">
              <div className="wishlist">WISHLIST</div>
            </div>
          </div>
        </div>
        <div className="detail">
          <div style={{ fontWeight: "bold" }}>{womensData.brand}</div>
          <div
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "220px",
              fontSize: "14px",
              color: "grey",
            }}
          >
            {womensData.title}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              Rs.{womensData.price}
            </div>
            <div
              style={{
                textDecoration: "line-through",
                fontSize: "14px",
                color: "grey",
              }}
            >
              Rs.{womensData.off_price}
            </div>
            <div style={{ color: "orange", fontSize: "12px" }}>
              ({womensData.discount}% OFF)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensCard;
