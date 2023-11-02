/* eslint-disable react-hooks/exhaustive-deps */
import SuperAdminSidebarItems from "@/constants/SuperAdminSidebarItems";
import { SUPER_ADMIN } from "@/constants/user-constant";
import { getUserInfo, isLoggedIn, isRole } from "@/services/auth.service";

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

const SuperAdminLayout = ({ children }) => {
  const loggedInUser = isLoggedIn();
  const loggedInUserRole = isRole();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  console.log(loggedInUserRole);

  useEffect(() => {
    if (!loggedInUser || loggedInUserRole !== SUPER_ADMIN) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  const role = "super_admin";
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
              SUPER ADMIN PANEL
            </h1>
            <Menu
              theme="dark"
              defaultSelectedKeys={["profile"]}
              mode="inline"
              items={SuperAdminSidebarItems(role)}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default SuperAdminLayout;
