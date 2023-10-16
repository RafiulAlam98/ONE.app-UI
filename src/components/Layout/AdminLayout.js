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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    fontWeight: 600,
    fontSize: 24,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: "100vh",
    lineHeight: "120px",
    color: "",
    backgroundColor: "#fff",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>ADMIN DASHBOARD</Header>
        <Layout hasSider>
          <Content style={contentStyle}>{children}</Content>
          <Sider style={siderStyle}>
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              style={{}}
            />
          </Sider>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
};

export default AdminLayout;
