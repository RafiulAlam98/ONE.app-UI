import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";
import Update from "@/components/Profile/Update";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

const UpdateUserProfile = () => {
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ margin: 32 }}>
      <div>
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
              title: (
                <Link href="/user-profile/update-user-profile">
                  Update User
                </Link>
              ),
            },
          ]}
        />
      </div>
      <Update onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateUserProfile;

UpdateUserProfile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
