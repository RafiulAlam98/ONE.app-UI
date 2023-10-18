import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const ViewBlog = () => {
  return <div></div>;
};

export default ViewBlog;

ViewBlog.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
