import UserDashboardLayout from "@/components/Layout/UserDashboardLayout";

const UserProfile = () => {
  return (
    <div>
      <h1 style={{ color: "tomato" }}>Welcome To User Profle</h1>
    </div>
  );
};

export default UserProfile;

UserProfile.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
