import Profile from "@/components/Profile/Profile";
import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";
import { useGetUserProfileQuery } from "@/redux/slice/api/userApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin } from "antd";
import Link from "next/link";
import React from "react";

const UserProfileView = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Spin />;
  }
  console.log(data);
  const user = data?.data;
  console.log(user);
  const route = `/user-profile/update-user-profile`;
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
              title: "User",
            },
            {
              title: <Link href="/user-profile/view-profile">Account</Link>,
            },
          ]}
        />
      </div>
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

      <Profile key={user._id} user={user} route={route} />
    </div>
  );
};

export default UserProfileView;

UserProfileView.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};

