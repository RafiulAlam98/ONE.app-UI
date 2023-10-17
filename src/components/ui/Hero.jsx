/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Details.module.css";
import { Breadcrumb, Typography } from "antd";
import Link from "next/link";
import { HomeOutlined, SafetyOutlined } from "@ant-design/icons";
import star from "@/assets/images/icon/star-white.svg";

const Hero = ({ detailsService }) => {
  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.contentImage}
        src={detailsService.images}
        alt={detailsService.title}
      />
      <div className={styles.headerContent}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Service Details",
            },
            {
              title: (
                <Typography
                  style={{ color: "#E4497D" }}
                >{`${detailsService.title}`}</Typography>
              ),
            },
          ]}
        />
        <h4>{detailsService.title}</h4>

        <Typography
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              color: "white",
              backgroundColor: "#479E38",
              padding: "4px 12px",
              borderRadius: "36px",
            }}
          >
            <SafetyOutlined />
          </span>
          <span
            style={{
              backgroundColor: "#479E38",
              padding: "12px 12px 12px 8px",
              borderRadius: "16px",
              color: "white",
              marginLeft: "-5px",
            }}
          >
            SAFETY ENSURED
          </span>
        </Typography>

        <Typography
          style={{
            backgroundColor: "#209E61",
            maxWidth: 150,
            margin: 16,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "24px" }}>
            {detailsService.rating}
          </span>{" "}
          <span style={{ padding: 5, color: "white", fontSize: 16 }}>
            out of 5
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
