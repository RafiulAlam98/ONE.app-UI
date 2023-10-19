import { Button, Col, Divider, List, Modal, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";

const SubServiceModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  detailsService,
}) => {
  const { _id } = detailsService;
  console.log(_id);
  return (
    <Modal
      title=<h2>{detailsService.title}</h2>
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ width: 800 }}
    >
      <Row gutter={16} justify="space-around">
        <Col className="gutter-row" span={24}>
          <Row
            gutter={16}
            justify="space-around"
            style={{
              display: "flex",
              margin: 8,
              flexDirection: "column",
            }}
          >
            {detailsService?.serviceTypes.map((item) => (
              <Col
                style={{
                  padding: 16,
                  marginBottom: 16,
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                key={item._id}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    color: "#3749BB",
                    fontSize: 18,
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ borderBottom: "2px solid #3749BB" }}>
                    {" "}
                    {item.name}
                  </span>
                </Typography>
                {item?.quantity.length <= 0 ? (
                  <div>
                    <Typography style={{ display: "block" }}>
                      {item.cost} / unit
                    </Typography>
                  </div>
                ) : (
                  <div>
                    {item.quantity.map((details) => (
                      <div key={details._id}>
                        <Typography
                          style={{
                            display: "block",
                            display: "flex",
                            justifyContent: "space-around",
                            borderBottom: "1px solid #d9d9d9",
                            padding: "0 10",
                          }}
                        >
                          <span style={{ fontWeight: 500 }}>
                            {details?.quantityRange} / unit
                          </span>

                          <span
                            style={{
                              marginLeft: 10,
                              color: "teal",
                              fontWeight: 700,
                            }}
                          >
                            {" "}
                            {details?.priceRange} tk
                          </span>
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    style={{
                      marginTop: 10,
                    }}
                    size="small"
                    type="primary"
                  >
                    <Link href={`/checkout/${_id}`}> Add</Link>
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default SubServiceModal;
