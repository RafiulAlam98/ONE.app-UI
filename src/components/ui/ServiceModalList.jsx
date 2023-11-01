import { Card, List, Typography } from "antd";
import Link from "next/link";
import React from "react";

const ServiceModalList = ({ value }) => {
  console.log(value._id);
  return (
    <Link href={`/serviceDetails/${value._id}`}>
      <Card
        hoverable
        style={{
          width: 300,

          margin: "8px",
          padding: "-50px",
        }}
      >
        <h3>{value.name}</h3>
      </Card>
    </Link>
  );
};

export default ServiceModalList;
