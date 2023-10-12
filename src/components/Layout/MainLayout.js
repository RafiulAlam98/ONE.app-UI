import { Layout } from "antd";

const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  minHeight: "100vh",
  lineHeight: "120px",
  backgroundColor: "#FFFFFF",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={{ minHeight: "100vh" }}>{children}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
