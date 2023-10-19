import { Layout } from "antd";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import dynamic from "next/dynamic";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{ minHeight: "100vh" }}>{children}</Content>

      <Footer />
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(MainLayout), { ssr: false });
