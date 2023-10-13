import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/ui/Carousel";
import Hero from "@/ui/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function HomePage({ services }) {
  return (
    <>
      <HeroCarousel />

      <Services services={services} />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/api/v1/services");
  const services = await res.json();
  return {
    props: {
      services,
    },
    revalidate: 5,
  };
}

