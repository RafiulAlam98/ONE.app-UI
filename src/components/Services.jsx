/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row, Spin } from "antd";
const { Meta } = Card;

const Services = ({ services }) => {
  console.log(services.data);
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: "24px", color: "tomato" }}>For Your Home</h1>
      <Row gutter={16} justify="space-between">
        {services.data.map((service) => (
          <Col span={4} lg={6} md={8} sm={12}>
            <Card
              key={service._id}
              hoverable
              style={{
                width: 240,
                marginBottom: "8px",
              }}
              cover={
                !service.image ? (
                  <Spin />
                ) : (
                  <img
                    alt=""
                    src={service.image}
                    style={{ maxWidth: "400px", height: "170px" }}
                  />
                )
              }
            >
              <Meta title={service.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
