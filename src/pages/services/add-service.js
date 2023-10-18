import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AdminLayout from "@/components/Layout/AdminLayout";
import UploadImage from "@/components/ui/UploadImage";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";

const AddService = () => {
  const imageKey = process.env.REACT_APP_imgbb_key;
  const onSubmit = (data) => {
    try {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData);
      const url = `https://api.imgbb.com/1/upload?key=838f11982bf963cc55011a4e344c5953`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          console.log(imgData);
        });
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
              title: "Service",
            },
            {
              title: <Link href="/services/add-service">Add Service</Link>,
            },
          ]}
        />
      </div>
      <div>
        <div>
          <Typography style={{ fontSize: 22, fontWeight: 700 }}>
            Create Service
          </Typography>
        </div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="name"
                  label="Service Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="image"
                  label="Image"
                  type="file"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
            </Row>
            <Button
              style={{ marginTop: 8 }}
              size="small"
              htmlType="submit"
              type="primary"
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddService;

AddService.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
