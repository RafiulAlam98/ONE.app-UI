/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="https://img.freepik.com/free-photo/cheerful-asian-male-janitor-walking-into-hotel-room-carrying-supplies-bucket_1098-17837.jpg?w=1060&t=st=1697167698~exp=1697168298~hmac=f9a14d6d06a1dd71f529c280bfc0716193ff9b9d28d79eceae88786d43391864"
        alt=""
        style={{ width: "100%", height: "350px", opacity: "0.8" }}
      />
      <p
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          color: "white",
          fontSize: "36px",
          fontWeight: "900",
          opacity: 1,
        }}
      >
        এক প্লাটফর্মে সব সমস্যার সমাধান <br />
        <span style={{ display: "inline-block", textAlign: "center" }}>
          POWERED BY ONE APP
        </span>
      </p>
    </div>
  );
};

export default Hero;
