/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import bannerImg from "../assets/images/download.png";

import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/components/ui/Carousel";
import Services from "@/components/Services";
import SubCategoryService from "@/components/SubCategoryService";
import { useState } from "react";
import ChooseUs from "@/components/ChooseUs";
import CallUs from "@/components/CallUs";
import { useGetAllServicesQuery } from "@/redux/slice/api/servicesApi";
import { useGetAllSubServicesQuery } from "@/redux/slice/api/subServiceApi";
import { Spin } from "antd";
import AllSubServices from "@/components/AllSubServices";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: serviceLoading } = useGetAllServicesQuery();
  const { data: subService, isLoading: subServiceLoading } =
    useGetAllSubServicesQuery();
  if (serviceLoading && subServiceLoading) {
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
  }
  const services = data;
  const subServices = subService.data;


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {serviceLoading | subServiceLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <>
          <HeroCarousel />
          <Services services={services} showModal={showModal} />
          <SubCategoryService
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            services={services}
          />
          <img
            src="https://img.freepik.com/free-vector/flat-customer-service-week-horizontal-banner-template_23-2149645767.jpg?w=900&t=st=1700807664~exp=1700808264~hmac=fb2cbdc1eaa1e64735c58665bda27d554a49b87d399aef43dca367aa33bf6c36"
            alt=""
            width="100%"
          />
          <AllSubServices subServices={subServices} />

          <ChooseUs />

          <CallUs />
        </>
      )}
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
