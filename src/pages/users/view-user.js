import AdminLayout from "@/components/Layout/AdminLayout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Spin, Table } from "antd";
import Link from "next/link";

import { useGetAllUserQuery } from "@/redux/slice/api/userApi";
import { UserTableColumn } from "../../constants/UserTableColumn";

const ViewUser = () => {
  const { data, isLoading } = useGetAllUserQuery();

  console.log(data);

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
              title: <Link href="view-user">View Users</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link href="/users/add-user">Add User</Link>
        </Button>
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
        columns={UserTableColumn()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewUser;

ViewUser.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

