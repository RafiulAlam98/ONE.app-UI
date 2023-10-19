/* eslint-disable @next/next/no-img-element */

import { Alert, Button, Col, Row } from "antd";
import React, { useState } from "react";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { getUserInfo } from "@/services/auth.service";
import TextArea from "antd/es/input/TextArea";

const AddReview = ({ detailsService, addReview }) => {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState();
  const loggedInUser = getUserInfo();

  const onChange = (e) => {
    setComment(e.target.value);
  };
  const onSubmit = async (data) => {
    const mData = {
      comment,
      firstName: data.firstName,
      email: loggedInUser.email,
      serviceId: detailsService?._id,
    };
    try {
      console.log(mData);
      const res = addReview(mData);
      console.log(data);
      if (res.data.data.statusCode) {
        setMessage(res.data.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "16px auto", padding: 16 }}>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            <h2 style={{ marginBottom: 10, fontFamily: "serif" }}>
              Add Some Review
            </h2>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: 8,
                  marginTop: 16,
                }}
              >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <FormInput
                      name="firstName"
                      label="Name"
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <FormInput
                      name="email"
                      label="Email"
                      defaultValue={loggedInUser?.email}
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <TextArea
                      style={{ marginTop: 8 }}
                      showCount
                      maxLength={100}
                      placeholder="Write your comment here"
                      onChange={onChange}
                    />
                  </Col>
                </Row>
                <Button
                  style={{ marginTop: 8 }}
                  size="small"
                  htmlType="submit"
                  type="primary"
                >
                  Add
                </Button>
                {message && <Alert message="Success Text" type="success" />}
              </div>
            </Form>
          </Col>
          <Col className="gutter-row" span={8}>
            <img
              src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?w=900&t=st=1697745630~exp=1697746230~hmac=e4ddd7c71d7008b649550ae8dafb3bb36547a9ab516442282ef8faf07d2ce697"
              alt=""
              style={{ width: 300 }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddReview;
