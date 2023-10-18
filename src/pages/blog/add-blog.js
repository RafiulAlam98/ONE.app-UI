import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const AddBlog = () => {
  return <div></div>;
};

export default AddBlog;
AddBlog.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
