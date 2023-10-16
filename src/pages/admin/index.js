import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h2>this is admin</h2>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
