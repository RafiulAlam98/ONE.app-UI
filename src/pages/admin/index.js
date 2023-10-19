import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h1 style={{ color: "tomato" }}>Welcome to Admin Panel</h1>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
