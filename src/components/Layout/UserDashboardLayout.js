/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { UserSidebarItems } from "@/constants/UserSidebarItems";
import { isLoggedIn, isRole } from "@/services/auth.service";
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Breadcrumb, Menu, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import { USER } from "@/constants/user-constant";

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
  const loggedInUserRole = isRole();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== USER) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

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
          defaultSelectedKeys={["account"]}
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
