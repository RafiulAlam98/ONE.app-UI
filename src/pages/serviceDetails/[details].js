import MainLayout from "@/components/Layout/MainLayout";
import { useGetSingleSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import { Spin } from "antd";
import { useRouter } from "next/router";
import React from "react";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const id = router.query.details;

  const { data, isLoading } = useGetSingleSubCategoryServiceQuery(id);
  if (isLoading) {
    return <Spin />;
  }

  console.log(data);

  return (
    <div>
      <h2>this is ServiceDetailsPage {router.query.details}</h2>
    </div>
  );
};

export default ServiceDetailsPage;

ServiceDetailsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
