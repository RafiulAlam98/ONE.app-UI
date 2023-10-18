/* eslint-disable react-hooks/exhaustive-deps */
import { UserSidebarItems } from "@/constants/UserSidebarItems";
import { isLoggedIn } from "@/services/auth.service";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Breadcrumb, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const UserDashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const loggedInUser = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!loggedInUser) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <h1 style={{ color: "white", textAlign: "center", padding: "16px 0" }}>
          USER PANEL
        </h1>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={UserSidebarItems()}
          style={{}}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboardLayout;
