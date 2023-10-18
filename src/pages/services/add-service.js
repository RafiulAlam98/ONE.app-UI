import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const AddService = () => {
  return <div></div>;
};

export default AddService;

AddService.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
