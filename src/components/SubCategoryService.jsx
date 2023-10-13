import { useGetAllSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import ServiceModalList from "@/ui/ServiceModalList";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, List, Modal, Row, Spin, Typography } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const SubCategoryService = ({
  handleCancel,
  handleOk,
  isModalOpen,
  services,
}) => {
  const { data, isLoading } = useGetAllSubCategoryServiceQuery(undefined);
  if (isLoading) {
    <Spin />;
  }
  const subCategoryServices = data?.data;

  const [selectedValue, setSelectedValue] = useState(null);
  let value;

  const getSubCategory = () => {
    return services.data.map((service) => ({
      serviceId: `${service._id}`,
      key: `${service._id}`,
      label: `${service.name}`,
    }));
  };
  const handleMenuClick = ({ key }) => {
    setSelectedValue(key);
  };

  const getContent = () => {
    value = subCategoryServices?.filter(
      (subCat) => subCat.category._id === selectedValue
    );
    return value;
  };

  if (selectedValue) {
    getContent();
  }
  console.log(value);

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
              defaultSelectedKeys={["4"]}
              items={getSubCategory()}
              onSelect={handleMenuClick}
              selectedKeys={[selectedValue]}
            />
          </Sider>
          <Layout>
            <Content style={{ textAlign: "center", margin: "24px 46px 0" }}>
              <div
                style={{
                  padding: "",
                  minHeight: 360,
                }}
              >
                {!value ? (
                  "Please Select a Service"
                ) : (
                  <ServiceModalList value={value} />
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </div>
  );
};

export default SubCategoryService;
