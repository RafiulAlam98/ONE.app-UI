import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";
import Update from "@/components/Profile/Update";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/slice/api/userApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

const UpdateUserProfile = () => {
  const { data } = useGetUserProfileQuery();
  console.log(data?.data);
  const previousData = data?.data;

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const onSubmit = async (data) => {
    try {
      const res = await updateUserProfile(data);
      console.log(res);
      if (res.data.data.statusCode === 200) {
        return messageApi.open({
          type: "success",
          content: `${res.data.data.message}`,
        });
      }
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
      <Update data={previousData} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateUserProfile;

UpdateUserProfile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
