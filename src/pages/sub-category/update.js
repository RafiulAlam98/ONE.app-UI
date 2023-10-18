import AdminLayout from "@/components/Layout/AdminLayout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

const UpdateSubCategory = () => {
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
              title: (
                <Link href="/sub-category/update">Update Sub Category</Link>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UpdateSubCategory;

UpdateSubCategory.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
