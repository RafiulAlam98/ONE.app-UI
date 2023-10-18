import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AdminLayout from "@/components/Layout/AdminLayout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const UpdateProfile = () => {
  const router = useRouter();

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
      <div>
        <div>
          <Typography style={{ fontSize: 22, fontWeight: 700 }}>
            Create User
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
                  name="name.firstName"
                  label="First Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="name.lastName"
                  label="Last Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="address"
                  label="Address"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="phoneNumber"
                  label="Phone"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="profileImg"
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

export default UpdateProfile;
UpdateProfile.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
