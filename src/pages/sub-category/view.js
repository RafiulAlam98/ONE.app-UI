import AdminLayout from "@/components/Layout/AdminLayout";
import SubCategoryServiceColumn from "@/constants/SubCategoryServiceColumn";
import { useGetAllSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Spin, Table } from "antd";
import Link from "next/link";
import React from "react";

const ViewSubCategory = () => {
  const { data, isLoading } = useGetAllSubCategoryServiceQuery();
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
              title: "Sub Category",
            },
            {
              title: <Link href="/sub-category/view">All Sub Category</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link href="/sub-category/add">Add Sub Category</Link>
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
        columns={SubCategoryServiceColumn()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewSubCategory;
ViewSubCategory.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
