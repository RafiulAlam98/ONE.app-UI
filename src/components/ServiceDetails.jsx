import React, { useState } from "react";
import styles from "@/styles/Details.module.css";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import SubServiceModal from "./SubServiceModal";

const ServiceDetails = ({ detailsService }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.mainDetails} style={{ padding: "0 16px" }}>
      <Row gutter={16} justify="space-between">
        <Col className="gutter-row" span={12}>
          <Typography
            style={{
              fontFamily: "serif",
              color: "#3749BB",
              fontSize: 24,
              paddingBottom: 4,
              marginTop: 16,
            }}
          >
            {detailsService.title}
          </Typography>
          {/* END Title */}
          <Typography
            style={{
              fontFamily: "serif",
              fontWeight: 400,
              fontSize: 18,
              paddingBottom: 16,
              color: "blueviolet",
            }}
          >
            Category by {detailsService.serviceId.name}
          </Typography>{" "}
          {/* END Category */}
          <Typography style={{ fontFamily: "serif", paddingBottom: 8 }}>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 16,
              }}
            >
              Warranty {detailsService.warrantyHour} years
            </span>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 16,
                marginLeft: 4,
              }}
            >
              No Discount
            </span>
          </Typography>
          {/* END Warranty and Discount  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <Card
            style={{
              maxWidth: 400,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              marginTop: "24px",
            }}
          >
            {detailsService?.serviceTypes?.map((item) => (
              <div style={{}} key={item._id}>
                <Button
                  style={{ width: "100%" }}
                  onClick={showModal}
                  className={styles.cardModalBtn}
                >
                  <span> {item.name.slice(0, 25)}..</span>
                  <span style={{ color: "#C71F66", fontWeight: 700 }}>
                    <RightOutlined />
                  </span>
                </Button>
                <SubServiceModal
                  isModalOpen={isModalOpen}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  detailsService={detailsService}
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "#E5330B",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-16px",
              }}
            >
              Description
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />
              <span
                style={{
                  fontFamily: "serif",
                }}
              >
                {detailsService.description}
              </span>
            </Typography>
          </div>
          {/* END Description  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "#E5330B",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Features
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.features.map((feature) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={feature}
                >
                  <CheckCircleOutlined
                    style={{ color: "#3749BB", marginRight: 8 }}
                  />
                  {feature}
                </span>
              ))}
            </Typography>
          </div>
          {/* END Features  */}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "#E5330B",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Included
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.includedOption.map((feature) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={feature}
                >
                  <CheckCircleOutlined
                    style={{ color: "#3749BB", marginRight: 8 }}
                  />
                  {feature}
                </span>
              ))}
            </Typography>
          </div>{" "}
          {/* END Included  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "#E5330B",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Excluded
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.excludedOption.map((feature) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={feature}
                >
                  <CloseCircleOutlined
                    style={{ color: "#3749BB", marginRight: 8 }}
                  />

                  {feature}
                </span>
              ))}
            </Typography>
          </div>{" "}
          {/* END Excluded Part  */}
        </Col>
      </Row>
      <div>
        <span
          style={{
            backgroundColor: "#E5330B",
            padding: 10,
            borderRadius: 6,
            display: "inline-block",
            color: "white",
            fontFamily: "serif",
            fontSize: 16,
            marginTop: 24,
            marginBottom: "-18px",
          }}
        >
          Terms And Conditions
        </span>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 12,
            borderRadius: 8,
          }}
        >
          <br />

          {detailsService.termsCondition.map((feature) => (
            <Typography key={feature._id}>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#3749BB",
                  fontFamily: "serif",
                }}
              >
                {feature?.title}:{" "}
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 400,

                  fontFamily: "serif",
                }}
              >
                {feature?.details}
              </span>
            </Typography>
          ))}
        </div>
      </div>{" "}
      {/* END Terms and condition  */}
    </div>
  );
};

export default ServiceDetails;
