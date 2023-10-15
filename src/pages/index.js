import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/ui/Carousel";
import Hero from "@/ui/Hero";
import Services from "@/components/Services";


const API_URL = getBaseUrl();

import SubCategoryService from "@/components/SubCategoryService";
import { useState } from "react";
import ChooseUs from "@/components/ChooseUs";
import { getBaseUrl } from "@/helpers/config/envConfig";

export default function HomePage({ services }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(API_URL + `/api/v1/services`);
  const services = await res.json();
  return {
    props: {
      services,
    },
    revalidate: 5,
  };
}

