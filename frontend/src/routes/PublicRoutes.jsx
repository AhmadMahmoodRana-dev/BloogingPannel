import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  console.log("Stored token:", token);
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
