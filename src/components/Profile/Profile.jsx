/* eslint-disable @next/next/no-img-element */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";

const Profile = ({ user, route }) => {
  const { email, name, phoneNumber, role, address, profileImg } = user;
  return (
    <div
      style={{
        margin: 32,
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          padding: 8,
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              {profileImg ? (
                <div style={{ padding: 16 }}>
                  <img
                    style={{ width: 150, borderRadius: "75px" }}
                    src={profileImg}
                    alt=""
                  />
                </div>
              ) : (
                <Avatar size={84} icon={<UserOutlined />} />
              )}
            </div>
            <Button style={{ margin: "0 16px", width: 100 }} type="primary">
              <Link href={route}>Edit Profile</Link>
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={{ marginTop: 30 }}>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                {name?.firstName} {name?.lastName} <br />
                <span>role as {role}</span>
              </Typography>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                Contact:
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                +88 {phoneNumber}
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {address}
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {email}
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
