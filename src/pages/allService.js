import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

const AllService = () => {
  return (
    <div>
      <h2>this is all services</h2>
    </div>
  );
};

export default AllService;

AllService.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
