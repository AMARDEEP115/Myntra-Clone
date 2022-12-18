import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import "./MensCard.css";

const MensCard = ({ mensData }) => {
//   console.log("data",mensData.title);
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
              {mensData.rating} <StarIcon boxSize={3} color="#4FD1C5" /> |{" "}
              {(mensData.count / 100).toFixed(1)}k
            </div>

            <img
              src={mensData.images.image1}
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
          <div style={{ fontWeight: "bold" }}>{mensData.brand}</div>
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
            {mensData.title}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              Rs.{mensData.price}
            </div>
            <div
              style={{
                textDecoration: "line-through",
                fontSize: "14px",
                color: "grey",
              }}
            >
              Rs.{mensData.off_price}
            </div>
            <div style={{ color: "orange", fontSize: "12px" }}>
              ({mensData.discount}% OFF)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensCard;
