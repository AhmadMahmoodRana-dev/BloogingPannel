import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Home/index";
import BlogPage from "./pages/BlogPage/BlogPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AddBlogPage from "./dashboard/AddBlogPage";
import DashboardHome from "./dashboard/DashboardHome";
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import AllBlogs from "./dashboard/AllBlogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import ScrollToHash from "./components/Scrolls/ScrollToHash"
import ScrollToTop from "./components/Scrolls/ScrollToTop"
import { SocketProvider } from "./context/SocketProvider";

const App = () => {
  return (
    <SocketProvider>
      <div className="w-full min-h-screen h-auto">
        <ScrollToHash/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Public Routes */}
          <Route element={<PublicRoutes />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Private Routes with nested layout */}
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route index element={<DashboardHome/>} />
            <Route path="create-blog" element={<AddBlogPage/>} />
            <Route path="all-blogs" element={<AllBlogs/>} />
            <Route path="settings" element={<h1>Settings Page</h1>} />
          </Route>
        </Routes>
      </div>
    </SocketProvider>
  );
};

export default App;
