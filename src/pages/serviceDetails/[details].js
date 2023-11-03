/* eslint-disable react-hooks/exhaustive-deps */
import MainLayout from "@/components/Layout/MainLayout";
import { useGetSingleSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Details.module.css";
import Hero from "@/components/ui/Hero";
import ServiceDetails from "@/components/ServiceDetails";
import { getBaseUrl } from "@/helpers/config/envConfig";
import Loading from "@/components/ui/Loading";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const [packages, setPackages] = useState([]);
  const id = router.query.details;
  console.log(id);
  const [loading, setLoading] = useState(false);

  const url = `${getBaseUrl()}/api/v1/packages/subServiceId/${id}`;

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPackages(data);
          setLoading(false);
        });
    }
  }, [id]);

  const { data, isLoading } = useGetSingleSubCategoryServiceQuery(id);
  if (isLoading || loading) {
    return <Loading />;
  }

  const detailsService = data?.data;

  return (
    <div className={styles.mainContainer}>
      <Hero detailsService={detailsService} />
      <ServiceDetails detailsService={detailsService} packages={packages} />
    </div>
  );
};

export default ServiceDetailsPage;

ServiceDetailsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
