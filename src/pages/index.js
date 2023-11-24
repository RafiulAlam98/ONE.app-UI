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
import { useGetAllEventsQuery } from "@/redux/slice/api/eventApi";
import AllEvents from "@/components/AllEvents";
import UpcomingService from "@/components/UpcomingService";
import AllBlogs from "@/components/AllBlogs";
import Feedback from "@/components/Feedback";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: serviceLoading } = useGetAllServicesQuery();
  const { data: subService, isLoading: subServiceLoading } =
    useGetAllSubServicesQuery();
  const { data: events, isLoading: eventLoading } = useGetAllEventsQuery();
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
  const subServices = subService?.data;
  const event = events?.data;

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
      {serviceLoading | subServiceLoading | event ? (
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
          <h2
            style={{
              fontWeight: 600,
              color: "blueviolet",
              textAlign: "center",
              fontSize: 44,
            }}
          >
            <span
              style={{
                textTransform: "uppercase",
                padding: 0,
                margin: 0,
              }}
            >
              We Are Waiting For Your Order
            </span>
          </h2>
          <img
            src="https://img.freepik.com/premium-photo/people-representing-diverse-professions-with-tools-holding-big-blank-banner-isolated-white-background_394555-662.jpg?w=1380"
            alt=""
            width="100%"
          />
          <AllSubServices subServices={subServices} />

          <ChooseUs />
          <AllEvents event={event} />
          <CallUs />
          <UpcomingService />
          <AllBlogs />
          <Feedback />
        </>
      )}
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
