import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import AdminLayout from "@/components/Layout/AdminLayout";
import { useGetAllServicesQuery } from "@/redux/slice/api/servicesApi";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Spin } from "antd";

import Link from "next/link";
import React from "react";

const AddSubCategory = () => {
  const { data, isLoading } = useGetAllServicesQuery();
  if (isLoading) {
    return (
      <Spin
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    );
  }
  const options = data?.data;

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
      <Form>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <FormSelectField
                lable="Category"
                size="small"
                name="category"
                options={options}
                placeholder="Select Category"
              />
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default AddSubCategory;

AddSubCategory.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
