import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/ui/Carousel";
import Hero from "@/ui/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
