/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row, Spin } from "antd";
import Link from "next/link";
import React from "react";
const { Meta } = Card;

const AllSubServices = ({ subServices }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "44px 16px" }}>
      <h1 style={{ fontSize: "24px", color: "blueviolet", margin: "16px 0" }}>
        <span style={{ borderBottom: "2px solid blueviolet" }}>
          More Of Our Services
        </span>
      </h1>
      <Row gutter={16}>
        {subServices?.map((item) => (
          <Col key={item._id} xs={24} sm={8} md={8} lg={6}>
            <Link href={`/serviceDetails/${item._id}`}>
              <Card
                key={item._id}
                hoverable
                style={{
                  maxidth: 240,
                  marginBottom: "8px",
                }}
                cover={
                  !item.images.length > 0 ? (
                    <Spin />
                  ) : (
                    <img
                      alt=""
                      src={item.images[0]}
                      style={{ maxWidth: "400px", height: "170px" }}
                    />
                  )
                }
              >
                <Meta title={item.name} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllSubServices;
