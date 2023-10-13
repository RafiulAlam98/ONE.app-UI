import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";

const UserProfile = () => {
  return (
    <div>
      <h2>this is userprofile page</h2>
    </div>
  );
};

export default UserProfile;

UserProfile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
