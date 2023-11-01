import { Inter } from "next/font/google";

import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/components/ui/Carousel";
import Services from "@/components/Services";
import SubCategoryService from "@/components/SubCategoryService";
import { useState } from "react";
import ChooseUs from "@/components/ChooseUs";
import CallUs from "@/components/CallUs";
import { useGetAllServicesQuery } from "@/redux/slice/api/servicesApi";
import { Spin } from "antd";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetAllServicesQuery();
  if (isLoading) {
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
      {isLoading ? (
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



