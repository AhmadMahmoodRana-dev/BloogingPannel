import React, { useState } from 'react';
import darkTheme from '../../colors/theme'; 
import { 
  FiHome, 
  FiEdit2, 
  FiFileText, 
  FiBarChart2, 
  FiUser, 
  FiSettings, 
  FiLogOut 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
const {logout} = useAuthStore()
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FiHome />,link:"/dashboard/" },
    { id: 'create', label: 'Create Blog', icon: <FiEdit2 />,link:"/dashboard/create-blog" },
    { id: 'posts', label: 'All Posts', icon: <FiFileText />,link:"/dashboard/" },
    { id: 'analytics', label: 'Analytics', icon: <FiBarChart2 />,link:"/dashboard/" },
    { id: 'profile', label: 'My Profile', icon: <FiUser />,link:"/dashboard/" },
    { id: 'settings', label: 'Settings', icon: <FiSettings />,link:"/dashboard/" },
  ];

  return (
    <div 
      className="fixed inset-y-0 left-0 w-64 p-4 md:block hidden"
      style={{
        backgroundColor: darkTheme.colors.NavbarBackground,
        borderRight: `1px solid ${darkTheme.colors.border}`,
        fontFamily: darkTheme.typography.fontFamily,
        fontSize: darkTheme.typography.fontSize
      }}
    >
      {/* Logo Section */}
      <div className="mb-8 p-2">
        <h1 
          className="text-3xl font-bold text-yellow-400"
        >
          Future Tech
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link to={item.link}
            key={item.id}
            onClick={() => setSelectedTab(item.id)}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
              selectedTab === item.id 
                ? 'bg-opacity-20' 
                : `hover:bg-opacity-10`
            }`}
            style={{
              backgroundColor: selectedTab === item.id 
                ? darkTheme.colors.NavbarSelectedTab 
                : 'transparent',
              color: selectedTab === item.id 
                ? darkTheme.colors.textPrimary 
                : darkTheme.colors.textSecondary,
            }}
          >
            <span className="text-lg" style={{ color: selectedTab === item.id 
              ? darkTheme.colors.primary 
              : darkTheme.colors.textSecondary }}>
              {item.icon}
            </span>
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-4 border-t" 
        style={{ borderColor: darkTheme.colors.border }}
      >
        <button
          className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-opacity-10"
          style={{
            color: darkTheme.colors.textSecondary,
            backgroundColor: 'transparent',
          }}
        >
          <FiLogOut />
          <span onClick={() => logout()} className="ml-3">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
