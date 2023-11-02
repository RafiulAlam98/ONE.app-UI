import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <Spin
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    />
  );
};

export default Loading;
