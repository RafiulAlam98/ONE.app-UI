import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const ViewFaq = () => {
  return <div></div>;
};

export default ViewFaq;
ViewFaq.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
