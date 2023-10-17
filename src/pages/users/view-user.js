import AdminLayout from "@/components/Layout/AdminLayout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin, Table } from "antd";
import Link from "next/link";

import { useGetAllUserQuery } from "@/redux/slice/api/userApi";
import { UserTableColumn } from "@/constants/userTableColumn";

const ViewUser = () => {
  const { data, isLoading } = useGetAllUserQuery();
  if (isLoading) {
    return <Spin />;
  }
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

