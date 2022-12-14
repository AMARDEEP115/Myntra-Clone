import React from "react";
import "./Filter.css"
const Filter=()=>{
    return (
      <div>
        <div
          className="filter"
          style={{ textAlign: "left", marginLeft: "1rem" }}
        >
          <div
            style={{
              textTransform: "uppercase",
              marginTop: "1rem",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            categories
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas</label>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
        </div>
        <hr style={{ color: "grey", marginTop: "2rem" }}></hr>

        <div
          className="filter"
          style={{ textAlign: "left", marginLeft: "1rem" }}
        >
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
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas</label>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input className="largerCheckbox" type="checkbox" />
            <label>Kurtas Set</label>
          </div>
        </div>
        <hr style={{ color: "grey", marginTop: "2rem" }}></hr>
      </div>
    );
}

export default Filter;