/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Button, Card, Col, Row, Spin } from "antd";
const { Meta } = Card;

const Services = ({ services, showModal }) => {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: "24px", color: "tomato", margin: "16px 0" }}>
        <span style={{ borderBottom: "2px solid tomato" }}>
          Events By Category
        </span>
      </h1>
      <Row gutter={16}>
        {services?.data?.map((service) => (
          <Col key={service._id} xs={24} sm={8} md={8} lg={6}>
            <button
              style={{ border: "none", backgroundColor: "#F5F5F5" }}
              onClick={showModal}
            >
              <Card
                key={service._id}
                hoverable
                style={{
                  maxidth: 240,
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
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
