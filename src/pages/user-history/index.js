import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";
import React from "react";

const UserHistory = () => {
  return (
    <div>
      <h2>User History</h2>
    </div>
  );
};

export default UserHistory;

UserHistory.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
