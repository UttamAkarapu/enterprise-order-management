import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

function MainLayout() {
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
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span>📊</span>
              Dashboard
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
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