import { Button } from "antd";
import React from "react";
import dayjs from "dayjs";
import { useUpdateOrderMutation } from "@/redux/slice/api/orderApi";
import Link from "next/link";

const UserHistoryColumn = () => {
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Slot",
      dataIndex: "slot",
      key: "slot",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CreatedAt",
      dataIndex: `${dayjs("createdAt").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")}`,
      key: "createdAt",
    },
    {
      title: "Action",
      render: function (data) {
        return (
          <>
            {data?.status === "canceled" ? (
              <Button disabled onClick={() => console.log(data)} type="warning">
                Canceled
              </Button>
            ) : (
              <Button onClick={() => console.log(data)} type="primary">
                <Link href={`/user-history/${data?._id}`}>Action</Link>
              </Button>
            )}
          </>
        );
      },
    },
  ];
  return columns;
};

export default UserHistoryColumn;
