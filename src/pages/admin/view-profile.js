import AdminLayout from "@/components/Layout/AdminLayout";
import Profile from "@/components/Profile/Profile";
import Loading from "@/components/ui/Loading";
import { useGetUserProfileQuery } from "@/redux/slice/api/userApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin } from "antd";
import Link from "next/link";
import React from "react";

const ViewProfile = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  const user = data?.data;
  if (isLoading) {
    return <Loading />;
  }

  const route = `/admin/update-admin-profile`;

  return (
    <div>
      <div style={{ padding: "20px 32px" }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Admin",
            },
            {
              title: <Link href="/admin/view-profile">Account</Link>,
            },
          ]}
        />
      </div>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <Profile key={user?._id} user={user} route={route} />
      )}
    </div>
  );
};

export default ViewProfile;


ViewProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
