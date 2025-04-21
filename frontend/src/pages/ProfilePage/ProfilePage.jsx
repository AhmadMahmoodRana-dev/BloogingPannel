import { NavLink } from "react-router-dom";
import darkTheme from "../../colors/theme";
import logo from "../../assets/Group.png"
import useAuthStore from "../../store/useAuthStore";

const ProfilePage = () => {
  const user = {
    name: "Sarah Johnson",
    bio: "Full-stack developer & technical writer. Love to share knowledge about web development and machine learning.",
    location: "New York, USA",
    joined: "January 2020",
    followers: 2845,
    following: 342,
    posts: [
      {
        id: 1,
        title: "Getting Started with React Hooks",
        excerpt:
          "A comprehensive guide to understanding and using React Hooks in modern applications...",
        date: "Mar 15, 2024",
        readTime: "8 min read",
      },
      {
        id: 2,
        title: "Mastering Tailwind CSS",
        excerpt:
          "Learn how to build beautiful interfaces without ever leaving your HTML...",
        date: "Mar 12, 2024",
        readTime: "10 min read",
      },
    ],
  };

  const { logout } = useAuthStore();


  return (
    <div
      style={{
        backgroundColor: darkTheme.colors.background,
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav
        style={{ backgroundColor: darkTheme.colors.NavbarBackground }}
        className="fixed w-full top-0 z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <NavLink
              to="/"
              className="text-white text-2xl font-bold flex gap-4 items-center"
            >
              <img src={logo} width={30} alt="logo" /> <p>FutureTech</p>
            </NavLink>
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-md font-medium ${
                    isActive
                      ? `bg-[${darkTheme.colors.NavbarSelectedTab}] text-[${darkTheme.colors.primary}]`
                      : `text-[${darkTheme.colors.textSecondary}] hover:text-[${darkTheme.colors.textPrimary}]`
                  }`
                }
              >
                Home
              </NavLink>
              <button
              onClick={() => logout()}
                style={{ color: darkTheme.colors.error }}
                className="px-3 py-2 text-md font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <div
          style={{ backgroundColor: darkTheme.colors.cardBackground }}
          className="rounded-lg p-8 shadow-xl"
        >
          <div className="flex items-center gap-8">
            <div
              style={{ backgroundColor: darkTheme.colors.primary }}
              className="w-32 h-32 rounded-full"
            />
            <div>
              <h1
                style={{ color: darkTheme.colors.textPrimary }}
                className="text-3xl font-bold mb-2"
              >
                {user.name}
              </h1>
              <p
                style={{ color: darkTheme.colors.textSecondary }}
                className="mb-4"
              >
                {user.location} · Joined {user.joined}
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <div
                    style={{ color: darkTheme.colors.primary }}
                    className="font-bold text-xl"
                  >
                    {user.followers}
                  </div>
                  <div
                    style={{ color: darkTheme.colors.textSecondary }}
                    className="text-sm"
                  >
                    Followers
                  </div>
                </div>
                <div className="text-center">
                  <div
                    style={{ color: darkTheme.colors.primary }}
                    className="font-bold text-xl"
                  >
                    {user.following}
                  </div>
                  <div
                    style={{ color: darkTheme.colors.textSecondary }}
                    className="text-sm"
                  >
                    Following
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{ color: darkTheme.colors.textPrimary }}
            className="mt-6 text-lg"
          >
            {user.bio}
          </p>
          <button
            style={{
              backgroundColor: darkTheme.colors.primary,
              color: darkTheme.colors.background,
            }}
            className="mt-6 px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Edit Profile
          </button>
        </div>

        {/* Blog Posts */}
        <div className="mt-8">
          <h2
            style={{ color: darkTheme.colors.textPrimary }}
            className="text-2xl font-bold mb-6"
          >
            Latest Posts
          </h2>
          <div className="space-y-6">
            {user.posts.map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: darkTheme.colors.cardBackground,
                  borderColor: darkTheme.colors.border,
                }}
                className="p-6 rounded-lg border hover:border-[#BB86FC] transition-colors"
              >
                <h3
                  style={{ color: darkTheme.colors.primary }}
                  className="text-xl font-bold mb-2"
                >
                  {post.title}
                </h3>
                <p
                  style={{ color: darkTheme.colors.textSecondary }}
                  className="mb-4"
                >
                  {post.excerpt}
                </p>
                <div
                  style={{ color: darkTheme.colors.textSecondary }}
                  className="text-sm flex justify-between items-center"
                >
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
