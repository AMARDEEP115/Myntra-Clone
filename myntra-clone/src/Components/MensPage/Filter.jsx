import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Filter.css";
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.getAll("sortBy") || "");
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);
  const initialcategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialcategory || []);

  const handleCategoryBox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  const handleBrandCheckBox = (e) => {
    const newBrands = [...brand];

    if (newBrands.includes(e.target.value)) {
      newBrands.splice(newBrands.indexOf(e.target.value), 1);
    } else {
      newBrands.push(e.target.value);
    }

    setBrand(newBrands);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    let params = {};
    category && (params.category = category);
    brand && (params.brand = brand);
    sortBy && (params.sortBy = sortBy);
    // params.brand = brand;
    console.log(params);
    setSearchParams(params);
  }, [brand, category, setSearchParams, sortBy]);

  // console.log(brand);
  return (
    <div>
      <div className="filter" style={{ textAlign: "left", marginLeft: "1rem" }}>
        <div
          style={{
            textTransform: "uppercase",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          price
        </div>
        <div>
          <div style={{ alignItems: "center" }}>
            <div onChange={handleSortBy}>
              <input
                className="largerCheckbox"
                type="radio"
                value="asc"
                name="sortBy"
              />
              <label>Low to high</label>
            </div>
            <div onChange={handleSortBy}>
              <input
                className="largerCheckbox"
                type="radio"
                value="desc"
                name="sortBy"
              />

              <label>High to low</label>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}></div>
      </div>
      <hr style={{ color: "grey", marginTop: "2rem" }}></hr>
      <div className="filter" style={{ textAlign: "left", marginLeft: "1rem" }}>
        <div
          style={{
            textTransform: "uppercase",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          category
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={category.includes("Men's Clothing")}
            value="Men's Clothing"
            onChange={handleCategoryBox}
          />
          <label>Men's Clothing</label>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={category.includes("Men's Footwear")}
            value="Men's Footwear"
            onChange={handleCategoryBox}
          />
          <label>Men's Footwear</label>
        </div>
      </div>

      <hr style={{ color: "grey", marginTop: "2rem" }}></hr>
      {/* color wise */}
      {/* <div className="filter" style={{ textAlign: "left", marginLeft: "1rem" }}>
        <div
          style={{
            textTransform: "uppercase",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          Colors
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <input
            className="largerCheckbox"
            type="checkbox"
            // checked={color.includes("blue")}
            value="blue"
            onChange={handleCategoryBox}
          />
          <div
            style={{
              padding: "7px 7px",
              borderRadius: "50%",
              background: "blue",
              marginRight: "5px",
            }}
          ></div>
          <label>blue</label>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={category.includes("tops")}
            value="tops"
            onChange={handleCategoryBox}
          />
          <label>tops</label>
        </div>
      </div>

      <hr style={{ color: "grey", marginTop: "2rem" }}></hr> */}
      <div className="filter" style={{ textAlign: "left", marginLeft: "1rem" }}>
        <div
          style={{
            textTransform: "uppercase",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          brand
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("Clovia")}
            value="Clovia"
            onChange={handleBrandCheckBox}
          />
          <label>Clovia</label>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("Roadster")}
            value="Roadster"
            onChange={handleBrandCheckBox}
          />
          <label>Roadster</label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("Mast & Harbour")}
            value="Mast & Harbour"
            onChange={handleBrandCheckBox}
          />
          <label>Mast & Harbour</label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("Dressberry")}
            value="Dressberry"
            onChange={handleBrandCheckBox}
          />
          <label>Dressberry</label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("H&M")}
            value="H&M"
            onChange={handleBrandCheckBox}
          />
          <label>H&M</label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="largerCheckbox"
            type="checkbox"
            checked={brand.includes("HRX")}
            value="HRX"
            onChange={handleBrandCheckBox}
          />
          <label>HRX</label>
        </div>
      </div>
      <hr style={{ color: "grey", marginTop: "2rem" }}></hr>
    </div>
  );
};

export default Filter;
