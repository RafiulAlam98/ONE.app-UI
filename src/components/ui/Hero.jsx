/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Details.module.css";
import { Breadcrumb, Typography } from "antd";
import Link from "next/link";
import { HomeOutlined, SafetyOutlined } from "@ant-design/icons";



const Hero = ({ detailsService }) => {
  // const originalDateStr = detailsService.createdAt;
  // const date = new Date(originalDateStr);

  // const formattedDate = format(date, "yyyy-MM-dd");

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
                  <Typography
                    style={{ color: "blueviolet", fontFamily: "serif" }}
                  >
                    <HomeOutlined />
                  </Typography>
                </Link>
              ),
            },
            {
              title: (
                <Typography
                  style={{
                    color: "blueviolet",
                    fontFamily: "serif",
                    fontWeight: 800,
                  }}
                >
                  Service Details
                </Typography>
              ),
            },
            {
              title: (
                <Typography
                  style={{
                    color: "blueviolet",
                    fontFamily: "serif",
                    fontWeight: 800,
                  }}
                >{`${detailsService.name}`}</Typography>
              ),
            },
          ]}
        />
        <h4 style={{ color: "blueviolet", fontFamily: "serif", marginTop: 10 }}>
          {detailsService.name}
        </h4>
      </div>
    </div>
  );
};

export default Hero;
