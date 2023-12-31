/* eslint-disable react-hooks/exhaustive-deps */
import { AdminSidebarItems } from "@/constants/AdminSideBarItems";
import { ADMIN } from "@/constants/user-constant";
import { getUserInfo, isLoggedIn, isRole } from "@/services/auth.service";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const { Sider, Content } = Layout;
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
  const loggedInUser = isLoggedIn();
  const loggedInUserRole = isRole();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== ADMIN) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  const role = "admin";
  return (
    <div>
      <Layout>
        <Layout hasSider>
          <Content
            style={{
              backgroundColor: "#E7E9EB",
            }}
          >
            {children}
          </Content>
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
              items={AdminSidebarItems(role)}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
