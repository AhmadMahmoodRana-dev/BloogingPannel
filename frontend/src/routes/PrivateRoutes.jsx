import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const PrivateRoutes = () => {
  const token = true; // replace with real auth logic
  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
