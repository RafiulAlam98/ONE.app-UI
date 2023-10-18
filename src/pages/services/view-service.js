import AdminLayout from "@/components/Layout/AdminLayout";
import { ServiceTableColumn } from "@/constants/ServiceTableColumn";
import { UserTableColumn } from "@/constants/UserTableColumn";
import { useGetAllServicesQuery } from "@/redux/slice/api/servicesApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Spin, Table } from "antd";
import Link from "next/link";
import React from "react";

const ViewService = () => {
  const { data, isLoading } = useGetAllServicesQuery();
  console.log(data?.data);
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
              title: "Services",
            },
            {
              title: <Link href="view-service">View Users</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link href="/services/add-service">Add Service</Link>
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
        columns={ServiceTableColumn()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewService;
ViewService.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
