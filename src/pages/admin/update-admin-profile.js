import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AdminLayout from "@/components/Layout/AdminLayout";
import Update from "@/components/Profile/Update";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const UpdateProfile = () => {
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
              title: <Link href="/users/add-user">Add User</Link>,
            },
          ]}
        />
      </div>
      <Update onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateProfile;
UpdateProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
