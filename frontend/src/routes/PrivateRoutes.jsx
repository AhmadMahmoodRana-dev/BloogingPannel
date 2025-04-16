import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log("Stored token:", token);

  return token ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
