import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AdminLayout from "@/components/Layout/AdminLayout";
import Update from "@/components/Profile/Update";
import Loading from "@/components/ui/Loading";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/slice/api/userApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

const UpdateProfile = () => {
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data);
  const previousData = data.data;

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
              title: "Admin",
            },
            {
              title: (
                <Link href="/admin/update-admin-profile">Update Account</Link>
              ),
            },
          ]}
        />
      </div>
      <Update data={previousData} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateProfile;
UpdateProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
