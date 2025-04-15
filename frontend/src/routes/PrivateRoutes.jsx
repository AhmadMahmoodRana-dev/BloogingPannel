import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const PrivateRoutes = () => {
  const token = false;
  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
