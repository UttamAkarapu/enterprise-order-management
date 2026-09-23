import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

import "./MainLayout.css";

function MainLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <div className="header-brand">
          <span className="brand-icon">🏢</span>
          <span>Enterprise Order Portal</span>
        </div>

        <div className="header-user">
          <span>Admin</span>

          <span className="user-avatar">A</span>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* Body */}
      <div className="app-body">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span>📊</span>
              Dashboard
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span>📦</span>
              Orders
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
