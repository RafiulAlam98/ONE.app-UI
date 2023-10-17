import AdminLayout from "@/components/Layout/AdminLayout";

const ViewUser = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All User</h1>
    </div>
  );
};

export default ViewUser;

ViewUser.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
