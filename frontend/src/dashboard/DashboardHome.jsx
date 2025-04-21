import React from 'react';
import { FiBook, FiEdit, FiUsers, FiBarChart2, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import darkTheme from '../colors/theme';

const DashboardHome = () => {
  const { colors } = darkTheme;

  const stats = [
    { title: 'Total Posts', value: 42, icon: <FiBook className="text-indigo-400" />, change: '+12%' },
    { title: 'Published', value: 36, icon: <FiEdit className="text-emerald-400" />, change: '+5%' },
    { title: 'Drafts', value: 6, icon: <FiEdit className="text-yellow-400" />, change: '-2%' },
    { title: 'Followers', value: 1284, icon: <FiUsers className="text-pink-400" />, change: '+24%' },
  ];

  const recentPosts = [
    { id: 1, title: 'Getting Started with React Hooks', date: 'May 15, 2023', views: 1243, status: 'Published' },
    { id: 2, title: 'Tailwind CSS Best Practices', date: 'May 10, 2023', views: 892, status: 'Published' },
    { id: 3, title: 'Building a Full-Stack Blog', date: 'May 5, 2023', views: 1567, status: 'Published' },
    { id: 4, title: 'The Future of JavaScript', date: 'Apr 28, 2023', views: 2104, status: 'Published' },
    { id: 5, title: 'Draft: Advanced React Patterns', date: 'May 18, 2023', views: 0, status: 'Draft' },
  ];

  const trendingPosts = [
    { id: 1, title: 'Getting Started with React Hooks', views: 1243 },
    { id: 2, title: 'Tailwind CSS Best Practices', views: 892 },
    { id: 3, title: 'Building a Full-Stack Blog', views: 1567 },
  ];

  return (
    <div style={{ backgroundColor: colors.background, color: colors.textPrimary, minHeight: '100vh' }}>
      {/* Header */}
      <header className='lg:block hidden' style={{ backgroundColor: colors.NavbarBackground, borderBottom: `1px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>BlogDash</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: colors.textSecondary }} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{
                  backgroundColor: colors.cardBackground,
                  color: colors.textPrimary,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '0.5rem',
                }}
              />
            </div>
            <button className="p-2" style={{ color: colors.textSecondary }}>
              <FiBell className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
                <FiUser style={{ color: colors.background }} />
              </div>
              <span style={{ color: colors.textPrimary }}>John Doe</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="rounded-xl p-6 mb-8" style={{ background: colors.primary, color: colors.background }}>
          <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
          <p className="opacity-90">You have 3 drafts waiting to be published. Keep up the great work!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg shadow p-6" style={{ backgroundColor: colors.cardBackground }}>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: colors.textSecondary }}>{stat.title}</p>
                  <p className="text-2xl font-semibold mt-1" style={{ color: colors.textPrimary }}>{stat.value}</p>
                </div>
                <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.NavbarSelectedTab }}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-sm mt-4">
                <span className="font-medium" style={{ color: colors.secondary }}>{stat.change}</span> from last month
              </p>
            </div>
          ))}
        </div>

        {/* Recent Posts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: colors.cardBackground }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: colors.border }}>
                <h3 className="text-lg font-medium" style={{ color: colors.textPrimary }}>Your Recent Posts</h3>
              </div>
              <div>
                {recentPosts.map((post) => (
                  <div key={post.id} className="px-6 py-4 hover:opacity-90 transition-colors" style={{ borderBottom: `1px solid ${colors.border}` }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium" style={{ color: colors.textPrimary }}>{post.title}</h4>
                        <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>{post.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: post.status === 'Published' ? colors.secondary : colors.error,
                            color: colors.background,
                          }}
                        >
                          {post.status}
                        </span>
                        <span className="text-sm" style={{ color: colors.textSecondary }}>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t" style={{ borderColor: colors.border, backgroundColor: colors.NavbarSelectedTab }}>
                <button className="font-medium" style={{ color: colors.primary }}>
                  View all posts →
                </button>
              </div>
            </div>
          </div>

          {/* Trending + Actions */}
          <div className="space-y-6">
            {/* Trending Posts */}
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: colors.cardBackground }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: colors.border }}>
                <h3 className="text-lg font-medium" style={{ color: colors.textPrimary }}>Trending Posts</h3>
              </div>
              <div>
                {trendingPosts.map((post, index) => (
                  <div key={post.id} className="px-6 py-4" style={{ borderBottom: `1px solid ${colors.border}` }}>
                    <div className="flex items-start space-x-4">
                      <span style={{ color: colors.textSecondary }}>{index + 1}</span>
                      <div>
                        <h4 className="font-medium" style={{ color: colors.textPrimary }}>{post.title}</h4>
                        <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>{post.views} views</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-lg overflow-hidden shadow" style={{ backgroundColor: colors.cardBackground }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: colors.border }}>
                <h3 className="text-lg font-medium" style={{ color: colors.textPrimary }}>Quick Actions</h3>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors"
                  style={{ backgroundColor: colors.primary, color: colors.background }}
                >
                  <FiEdit className="mr-2" />
                  Write New Post
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: 'transparent',
                    color: colors.textPrimary
                  }}
                >
                  <FiBarChart2 className="mr-2" />
                  View Analytics
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 rounded-lg transition-colors"
                  style={{
                    border: `1px solid ${colors.border}`,
                    backgroundColor: 'transparent',
                    color: colors.textPrimary
                  }}
                >
                  <FiUsers className="mr-2" />
                  Manage Followers
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
