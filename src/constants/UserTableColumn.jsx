import { Space, Table, Tag } from "antd";

export const UserTableColumn = () => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return columns;
};
