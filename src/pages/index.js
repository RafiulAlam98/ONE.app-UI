import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/components/Layout/MainLayout";

export default function HomePage() {
  return (
    <>
      <h2 style={{ color: "red" }}>this is next page</h2>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
