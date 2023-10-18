import AdminLayout from "@/components/Layout/AdminLayout";
import { useGetUserProfileQuery } from "@/redux/slice/api/userApi";
import { Spin } from "antd";
import React from "react";

const ViewProfile = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Spin />;
  }
  console.log(data);
  return (
    <div>
      {isLoading && (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      )}
    </div>
  );
};

export default ViewProfile;
ViewProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
