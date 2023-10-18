import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import AdminLayout from "@/components/Layout/AdminLayout";
import { Col, Row } from "antd";
import React from "react";

const AddService = () => {
  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name={name}
                label="Service Name"
                type="text"
                size="small"
              />
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AddService;

AddService.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
