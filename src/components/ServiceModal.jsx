import { Button, Col, List, Modal, Row, Typography } from "antd";
import React from "react";

const ServiceModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  detailsService,
}) => {
  return (
    <Modal
      title=<h2>{detailsService.title}</h2>
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ width: 800 }}
    >
      <Row gutter={16} justify="space-around">
        <Col className="gutter-row" span={16}>
          <div
            style={{
              display: "flex",
              margin: 8,
              flexDirection: "column",
            }}
          >
            {detailsService?.serviceTypes.map((item) => (
              <div
                style={{
                  padding: 16,
                  marginBottom: 16,
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                key={item._id}
              >
                <Typography style={{ fontWeight: 600, color: "#3749BB" }}>
                  {item.name}
                </Typography>
                {item?.quantity.length <= 0 ? (
                  <div>
                    <Typography style={{ display: "block" }}>
                      {item.cost} / unit
                    </Typography>
                  </div>
                ) : (
                  ""
                )}
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    style={{
                      marginTop: 10,
                    }}
                    size="small"
                    type="primary"
                  >
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
    </Modal>
  );
};

export default ServiceModal;
