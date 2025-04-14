import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen h-auto">
    <Navbar/>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<h1>Login</h1>} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
