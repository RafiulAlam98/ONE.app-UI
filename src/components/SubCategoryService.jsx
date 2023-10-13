import { useGetAllSubCategoryServiceQuery } from "@/redux/slice/subCategoryService/subCategorySlice";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Modal, Row, Spin } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { Layout, Menu, theme } from "antd";
import React from "react";

const SubCategoryService = ({ handleCancel, handleOk, isModalOpen }) => {
  const { data, isLoading } = useGetAllSubCategoryServiceQuery(undefined);
  if (isLoading) {
    <Spin />;
  }

  const subCategoryServices = data?.data;

  console.log(subCategoryServices);
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
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={[
                UserOutlined,
                VideoCameraOutlined,
                UploadOutlined,
                UserOutlined,
              ].map((icon, index) => ({
                key: String(index + 1),
                icon: React.createElement(icon),
                label: `nav ${index + 1}`,
              }))}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                content
              </div>
            </Content>
          </Layout>
        </Layout>
      </Modal>
    </div>
  );
};

export default SubCategoryService;
