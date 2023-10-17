import { Col, List, Modal, Row, Typography } from "antd";
import React from "react";

const ServiceModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  detailsService,
}) => {
  console.log(detailsService);
  return (
    <Modal
      title={detailsService.title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ width: 780 }}
    >
      <h1></h1>
      <Row gutter={16} justify="space-around">
        <Col className="gutter-row" span={16}>
          <List
            bordered
            dataSource={detailsService.serviceTypes}
            renderItem={(item) => (
              <List.Item>
                <Typography>{item.name}</Typography>
              </List.Item>
            )}
          />
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
    </Modal>
  );
};

export default ServiceModal;
