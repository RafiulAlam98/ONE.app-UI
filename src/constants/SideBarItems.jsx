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
import { Avatar } from "antd";
import Link from "next/link";

export const SideBarItems = (role) => {
  const defaultSidebarItems = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href="/admin/view-profile">My Account </Link>,
          key: "account profile",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/admin/update-profile">Update Account</Link>,
          key: "update profile",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: "Users",
      key: "users",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href="/users/view-user">View </Link>,
          key: "view user",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/users/update-user">Update </Link>,
          key: "update user",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: "Services",
      key: "services",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link href="/services/view-service">View </Link>,
          key: "view service",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/services/update-service">Update </Link>,
          key: "update service",
          icon: <StockOutlined />,
        },
      ],
    },
    {
      label: "Sub Category",
      key: "sub-category",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link href="/sub-category/view">View </Link>,
          key: "view sub-category",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/sub-category/update">Update </Link>,
          key: "update sub-category",
          icon: <StockOutlined />,
        },
      ],
    },
    {
      label: "FAQ",
      key: "faq",
      icon: <ExportOutlined />,
      children: [
        {
          label: <Link href="/faq/view-faq">View </Link>,
          key: "view faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link href="/faq/update-faq">Update</Link>,
          key: "update faq",
          icon: <QuestionCircleOutlined />,
        },
      ],
    },
    {
      label: "Blog",
      key: "blog",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link href="/blog/view-blog">View </Link>,
          key: "view blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/blog/update-blog">Update </Link>,
          key: "update blog",
          icon: <ContainerOutlined />,
        },
      ],
    },
  ];
  return defaultSidebarItems;
};
