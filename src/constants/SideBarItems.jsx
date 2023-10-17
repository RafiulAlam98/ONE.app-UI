import {
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const SideBarItems = (role) => {
  const defaultSidebarItems = [
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
  ];
  return defaultSidebarItems;
};
