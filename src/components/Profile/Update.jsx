import { Button, Col, Row, Spin, Typography } from "antd";
import FormInput from "../Forms/FormInput";
import Form from "../Forms/Form";

const Update = ({ onSubmit, data }) => {
  return (
    <div>
      <div>
        <Typography style={{ fontSize: 22, fontWeight: 700, margin: "8px 0" }}>
          Update Profile
        </Typography>
      </div>
      {!data ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
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
                  defaultValue={data?.name?.firstName}
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
                  defaultValue={data?.name?.lastName}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                <FormInput
                  name="address"
                  label="Address"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                  defaultValue={data?.address}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="profileImg"
                  label="Image"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                  defaultValue={data?.profileImg}
                />
              </Col>
            </Row>
            <Button
              style={{ marginTop: 8 }}
              size="small"
              htmlType="submit"
              type="primary"
            >
              Update
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Update;
