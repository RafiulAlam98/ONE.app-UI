import SuperAdminSidebarItems from "@/constants/SuperAdminSidebarItems";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";

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
  const user = getUserInfo();
  const router = useRouter();

  console.log(loggedInUser);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!loggedInUser) {
  //     router.push("/login");
  //   } else if (user.role === "user") {
  //     router.push("/user-profile");
  //   } else if (user.role === "admin") {
  //     router.push("/admin");
  //   }
  //   setIsLoading(true);
  // }, [router, isLoading]);

  // if (!isLoading) {
  //   return <p>Loading</p>;
  // }
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
