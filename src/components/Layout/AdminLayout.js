import { SideBarItems } from "@/constants/SideBarItems";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Files", "9", <FileOutlined />),
];

const AdminLayout = ({ children }) => {
  const role = "admin";
  return (
    <div>
      <Layout>
        <Layout hasSider>
          <Content style={{ backgroundColor: "#E7E9EB" }}>{children}</Content>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "sticky",
              top: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <h1
              style={{ color: "white", textAlign: "center", padding: "16px 0" }}
            >
              ADMIN PANEL
            </h1>
            <Menu
              theme="dark"
              defaultSelectedKeys={["profile"]}
              mode="inline"
              items={SideBarItems(role)}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
