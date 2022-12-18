import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./SortData.css";

function SortData() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
  // console.log("searchparams", searchParams.get("sortBy"));
  // const womens = useSelector((store) => store.womens);
  // const handleSortBy = (e) => {
  //   e.preventDefault();
  //   setSortBy(e.target.value);
  // };

  // useEffect(() => {
  //   const params = {};
  //   sortBy && (params.sortBy = sortBy);
  //   setSearchParams(params);
  // }, [setSearchParams, sortBy]);
  return (
    <>
      <div
        style={{
          marginLeft: "2rem",
          fontWeight: "bold",
          marginTop: "3rem",
          fontSize: "18px",
        }}
      >
        FILTERS
      </div>
      <div style={{ display: "flex", marginTop: "2rem", marginLeft: "-20rem" }}>
        <div className="head-data">
          Bundles <ChevronDownIcon />
        </div>
        <div className="head-data">
          Country of origin <ChevronDownIcon />
        </div>
        <div className="head-data">
          Size <ChevronDownIcon />
        </div>
      </div>
      <div style={{ marginRight: "2rem" }}>
        <select
          style={{
            width: "250px",
            padding: "9px 0px",
            border: "0.5px solid grey",
          }}
          className="ddlist"
        >
          <option>Sort By:Recommendation</option>
          <option value="asc">Price:Low to High</option>
          <option value="desc">Price:High to Low</option>
        </select>
      </div>
    </>
  );
}

export default SortData;
