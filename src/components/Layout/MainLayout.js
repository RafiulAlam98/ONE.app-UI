import { Layout } from "antd";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const { Content } = Layout;

const contentStyle = {
  minHeight: "100vh",
  lineHeight: "120px",
  backgroundColor: "#FFFFFF",
};

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "100vh" }}>{children}</Content>

      <Footer />
    </Layout>
  );
};

export default MainLayout;
