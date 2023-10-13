import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
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
        <Link href="/">
          <div
            style={{
              fontFamily: "sans-serif",
              font: "icon",
              paddingLeft: "16px",
            }}
          >
            <span
              style={{
                color: "tomato",
                fontWeight: "700",
                fontSize: "24px",
                fontFamily: "Black Ops One, cursive",
              }}
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
                backgroundColor: "yellow",
                borderRadius: "4px",
              }}
            ></div>
            <span
              style={{
                font: "icon",
                fontStyle: "italic",
                color: "yellowgreen",
                fontFamily: "Black Ops One, cursive",
              }}
            >
              app
            </span>
          </div>
        </Link>

        <Link style={{}} href="/allService">
          All Services
        </Link>

        <div>
          <Link href="/userProfile">
            <Avatar size="large" icon={<UserOutlined />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
