import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";
import UserHistoryColumn from "@/constants/UserHistoryColumn";
import { useGetSingleOrderQuery } from "@/redux/slice/api/orderApi";
import { getUserInfo } from "@/services/auth.service";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Spin, Table } from "antd";
import Link from "next/link";
import React from "react";

const UserHistory = () => {
  const loggedInUser = getUserInfo();

  let rawData = [];
  const email = loggedInUser?.email;
  const { data, isLoading } = useGetSingleOrderQuery(email);
  if (isLoading) {
    return <Spin />;
  }

  rawData.push(data?.data);
  return (
    <div>
      <div style={{ margin: 32 }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Users",
            },
            {
              title: <Link href="user-history">History</Link>,
            },
          ]}
        />
      </div>

      {isLoading && (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      )}
      <Table
        style={{ maxWidth: 800, margin: "0 auto" }}
        columns={UserHistoryColumn()}
        dataSource={rawData}
      />
    </div>
  );
};

export default UserHistory;

UserHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
