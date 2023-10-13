import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/Layout/MainLayout";
import HeroCarousel from "@/ui/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
