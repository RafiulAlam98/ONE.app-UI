/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  useGetAllSubCategoryServiceQuery,
  useGetSingleSubCategoryServiceQuery,
} from "@/redux/slice/subCategoryService/subCategorySlice";
import ServiceModalList from "@/components/ui/ServiceModalList";
import { Modal, Spin, Typography } from "antd";
const { Content, Sider } = Layout;
import { Layout, Menu, theme } from "antd";
import { getBaseUrl } from "@/helpers/config/envConfig";

import React, { useEffect, useState } from "react";

const SubCategoryService = ({
  handleCancel,
  handleOk,
  isModalOpen,
  services,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `${getBaseUrl()}/api/v1/sub-services/serviceId/${serviceId}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSubCategory(data);
        setLoading(false);
      });
  }, [serviceId]);

  console.log(subCategory);
  const getSubCategory = () => {
    return services?.data.map((service) => ({
      serviceId: `${service._id}`,
      key: `${service._id}`,
      label: `${service.name}`,
    }));
  };
  const handleMenuClick = ({ key }) => {
    setSelectedValue(key);
  };

  const getServiceIdHandler = (item) => {
    if (item.key) {
      setServiceId(item.key);
    }
  };

  return (
    <div>
      <Modal
        title="All Services"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Layout>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              // console.log(broken);
            }}
            onCollapse={(collapsed, type, items) => {
              // console.log(collapsed, type, items);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              items={getSubCategory()}
              onSelect={handleMenuClick}
              selectedKeys={[selectedValue]}
              onClick={(item) => getServiceIdHandler(item)}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                textAlign: "center",
                margin: "24px 46px 0",
              }}
            >
              {loading ? (
                <Spin />
              ) : (
                <div
                  style={{
                    padding: "",
                    minHeight: 360,
                  }}
                >
                  {subCategory?.statusCode !== 200 ? (
                    <Typography
                      style={{
                        fontSize: 32,
                        fontWeight: 700,
                        color: "darkgray",
                      }}
                    >
                      Please Select a Service
                    </Typography>
                  ) : (
                    <div>
                      {subCategory?.data.map((item) => (
                        <ServiceModalList key={item._id} value={item} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </div>
  );
};

export default SubCategoryService;
