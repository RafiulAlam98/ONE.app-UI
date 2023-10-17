import MainLayout from "@/components/Layout/MainLayout";
import { useGetSingleSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import { Spin } from "antd";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Details.module.css";
import DetailsHeader from "@/components/DetailsHeader";
import Hero from "@/components/ui/Hero";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const id = router.query.details;

  const { data, isLoading } = useGetSingleSubCategoryServiceQuery(id);
  if (isLoading) {
    return <Spin />;
  }

  const detailsService = data.data;
  console.log(data.data);

  return (
    <div className={styles.mainContainer}>
      <Hero detailsService={detailsService} />
      <ServiceDetailsPage />
    </div>
  );
};

export default ServiceDetailsPage;

ServiceDetailsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
