import AdminLayout from "@/components/Layout/AdminLayout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";
import Link from "next/link";
import React from "react";

const AddSubCategory = () => {
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
              title: <Link href="/sub-category/add">Add Sub Category</Link>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AddSubCategory;

AddSubCategory.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
