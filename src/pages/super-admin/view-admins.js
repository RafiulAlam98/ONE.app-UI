import SuperAdminLayout from "@/components/Layout/SuperAdminLayout";
import AdminTableColumn from "@/constants/AdminTableColumn";
import { useGetAllAdminQuery } from "@/redux/slice/api/adminApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Spin, Table } from "antd";
import Link from "next/link";
import React from "react";

const ViewAdmins = () => {
  const { data, isLoading } = useGetAllAdminQuery();
  console.log(data);
  return (
    <div>
      <div style={{ margin: 32 }}>
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
              title: "Super Admin",
            },
            {
              title: <Link href="/super-admin/view-admin">View Admins</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link href="/super-admin/create-admin">Create Admin</Link>
        </Button>
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
      <Table
        style={{ maxWidth: 800, margin: "0 auto" }}
        columns={AdminTableColumn()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewAdmins;

ViewAdmins.getLayout = function getLayout(page) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
