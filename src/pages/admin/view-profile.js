import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const ViewProfile = () => {
  return (
    <div>
      <h1>Account Profile</h1>
    </div>
  );
};

export default ViewProfile;
ViewProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
