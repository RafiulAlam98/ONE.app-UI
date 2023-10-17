import { List, Typography } from "antd";
import Link from "next/link";
import React from "react";

const ServiceModalList = ({ value }) => {
  console.log(value._id);
  return (
    <>
      <List
        size="small"
        style={{
          textAlign: "right",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
        bordered
        dataSource={value}
        renderItem={(item) => (
          <Link href={`/serviceDetails/${item._id}`}>
            <List.Item>
              <Typography
                style={{
                  fontWeight: 400,
                  color: "black",
                  fontSize: "16px",
                }}
              >
                {item.title}
              </Typography>
            </List.Item>
          </Link>
        )}
      />
    </>
  );
};

export default ServiceModalList;
