import CheckoutDrawer from "@/components/Drawer/Drawer";
import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from "next/router";
import React from "react";

const CheckoutService = () => {
  const router = useRouter();
  return (
    <div>
      <h2>{router.query.service}</h2>
      <CheckoutDrawer />
    </div>
  );
};

export default CheckoutService;

CheckoutService.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
