import { authKey, role } from "@/constants/authKey";
import {
  getUserInfo,
  removeUserInfo,
  removeUserRoleInfo,
} from "@/services/auth.service";
import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const loggedInUser = getUserInfo();
  const router = useRouter();
  console.log(loggedInUser);
  const handleLogout = () => {
    removeUserInfo(authKey);
    removeUserRoleInfo(role);
    router.push("/login");
  };
  return (
    <div style={{ backgroundColor: "#6B5B95" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: "64px",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      >
        <div>
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
            href="/allService"
          >
            All Services
          </Link>
          {loggedInUser ? (
            <div style={{ paddingRight: "8px" }}>
              <Button onClick={() => handleLogout()} danger type="text">
                <span style={{ marginRight: "8px" }}>
                  <ExportOutlined />
                </span>{" "}
                Logout
              </Button>
            </div>
          ) : (
            <>
              {" "}
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
                href="/signup"
              >
                Sign Up
              </Link>
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
                href="/login"
              >
                Sign In
              </Link>
            </>
          )}
          <div>
            {loggedInUser === "user" ? (
              <Link href="/user-profile">
                <Avatar size="large" icon={<UserOutlined />} />
              </Link>
            ) : (
              <Link href="/admin">
                <Avatar size="large" icon={<UserOutlined />} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
