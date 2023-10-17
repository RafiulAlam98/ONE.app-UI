import AdminLayout from "@/components/Layout/AdminLayout";
import React from "react";

const UpdateUser = () => {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Update User</h1>
    </div>
  );
};

export default UpdateUser;
UpdateUser.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
