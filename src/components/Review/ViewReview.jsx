import { useGetReviewQuery } from "@/redux/slice/api/reviewApi";
import { Col, Row, Spin } from "antd";
import React from "react";

const ViewReview = ({ detailsService }) => {
  const id = detailsService?._id;
  const { data, isLoading } = useGetReviewQuery(id);
  if (isLoading) {
    return <Spin />;
  }
  console.log(data);
  return <div></div>;
};

export default ViewReview;
