/* eslint-disable @next/next/no-img-element */
import { Button, Col, Divider, List, Modal, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/Ai";
import { TbCurrencyTaka } from "react-icons/Tb";

const SubServiceModal = ({ isModalOpen, handleOk, handleCancel, packages }) => {
  console.log(packages);
  return (
    <Modal
      title=<div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "blueviolet", fontWeight: 400 }}>
          {packages.data[0].subServiceId.name}
        </h3>
        <h3 style={{ color: "blueviolet", fontWeight: 400 }}>
          {packages.data.length} options available
        </h3>
      </div>
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
            {packages?.data.map((item) => (
              <>
                <Col
                  style={{
                    padding: 16,
                    marginBottom: 16,
                    borderRadius: "10px",
                  }}
                  key={item._id}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={item.images[0]}
                        style={{
                          height: "80px",
                          width: "90px",
                          borderRadius: "12px",
                        }}
                        alt="item"
                      />
                    </div>
                    {/*iMage part end */}

                    <div>
                      <List
                        style={{
                          width: "180px",
                          border: "none",
                        }}
                        size="small"
                        bordered
                        dataSource={item.options}
                        renderItem={(item) => (
                          <List.Item style={{ fontSize: "11px" }}>
                            {item}
                          </List.Item>
                        )}
                      />
                    </div>
                    {/*Options  part end */}

                    <div>
                      <Typography
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {item.unit}
                      </Typography>
                      <List
                        style={{
                          width: "180px",
                          border: "none",
                        }}
                        size="small"
                        bordered
                        dataSource={item.details}
                        renderItem={(item) => (
                          <List.Item style={{ fontSize: "11px" }}>
                            {item}
                          </List.Item>
                        )}
                      />
                      <Typography
                        style={{
                          textAlign: "center",
                          fontWeight: 600,
                          color: "blueviolet",
                          fontSize: "20px",
                        }}
                      >
                        Cost - <span>{item.price}</span>
                        <span>
                          <TbCurrencyTaka />
                        </span>
                      </Typography>
                    </div>
                    {/*Details part end */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginBottom: 12,
                    }}
                  >
                    <Button
                      style={{
                        marginTop: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      size="small"
                      type="primary"
                    >
                      <Link style={{}} href={`/checkout/${item._id}`}>
                        {" "}
                        <span>Add</span>{" "}
                        <span style={{ fontWeight: 600 }}>
                          <AiOutlinePlus />
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <hr />
                </Col>
              </>
            ))}
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default SubServiceModal;
