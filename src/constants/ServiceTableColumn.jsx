import { Space, Table, Tag } from "antd";

export const ServiceTableColumn = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return columns;
};
