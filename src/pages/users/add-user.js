import AdminLayout from "@/components/Layout/AdminLayout";

const AddUsers = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add New User</h1>
    </div>
  );
};

export default AddUsers;

AddUsers.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
