import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Link from "next/link";

const SuperAdminSidebarItems = (role) => {
  const defaultSidebarItems = [
    {
      label: <Link href="">Account </Link>,
      key: "profile",
      icon: <UserOutlined />,
    },
    {
      label: "Admins",
      key: "admins",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href="/super-admin/view-admins">View </Link>,
          key: "view-admin",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/super-admin/create-admin">Create </Link>,
          key: "create-admin",
          icon: <UserOutlined />,
        },
      ],
    },
  ];
  return defaultSidebarItems;
};

export default SuperAdminSidebarItems;