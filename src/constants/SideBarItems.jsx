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
          label: <Link href="/profile/view-profile">View Profile</Link>,
          key: "view profile",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/profile/update-profile">Update Profile</Link>,
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
          label: <Link href="/users/add-user">Add User</Link>,
          key: "add user",
          icon: <UserAddOutlined />,
        },
        {
          label: <Link href="/users/view-user">View User</Link>,
          key: "view user",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/users/update-user">Update User</Link>,
          key: "update user",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/users/delete-user">Delete User</Link>,
          key: "delete user",
          icon: <UserDeleteOutlined />,
        },
      ],
    },
    {
      label: "Services",
      key: "services",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link href="/services/add-service">Add Service</Link>,
          key: "add service",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/services/view-service">View Service</Link>,
          key: "view service",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/services/update-service">Update Service</Link>,
          key: "update service",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/services/delete-user">Delete Service</Link>,
          key: "delete service",
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
          label: <Link href="/faq/add-faq">Add Faq</Link>,
          key: "add faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link href="/faq/view-faq">View Faq</Link>,
          key: "view faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link href="/faq/update-faq">Update Faq</Link>,
          key: "update faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link href="/faq/delete-user">Delete Faq</Link>,
          key: "delete faq",
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
          label: <Link href="/faq/add-blog">Add Blog</Link>,
          key: "add blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/blog/view-blog">View Blog</Link>,
          key: "view blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/blog/update-blog">Update Blog</Link>,
          key: "update blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/blog/delete-user">Delete Blog</Link>,
          key: "delete blog",
          icon: <ContainerOutlined />,
        },
      ],
    },
  ];
  return defaultSidebarItems;
};
