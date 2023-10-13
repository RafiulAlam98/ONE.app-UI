import React from "react";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#6B5B95" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      >
        <div style={{ fontFamily: "sans-serif", font: "icon" }}>
          <span
            style={{ color: "tomato", fontWeight: "700", fontSize: "24px" }}
          >
            ONE
          </span>
          <div
            style={{
              fontSize: "24px",
              borderRadius: "",
              display: "inline-block",
              width: "4px",
              height: "4px",
              backgroundColor: "black",
              borderRadius: "4px",
            }}
          ></div>
          <span style={{ font: "icon", fontStyle: "italic" }}>app</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
