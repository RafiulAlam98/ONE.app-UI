import {
  ContainerOutlined,
  DeploymentUnitOutlined,
  ExportOutlined,
  QuestionCircleOutlined,
  StockOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import Link from "next/link";

export const UserSidebarItems = (role) => {
  const defaultSidebarItems = [
    {
      label: <Link href="/user-profile/view-profile">Account </Link>,
      key: "profile",
      icon: <UserOutlined />,
    },
    {
      label: <Link href="/user-history">History</Link>,
      key: "history",
      icon: <UnorderedListOutlined />,
    },
  ];
  return defaultSidebarItems;
};
