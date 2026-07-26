import { BookOpen, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DashboardSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function getNavigationClass({ isActive }: { isActive: boolean }) {
    return isActive
      ? "dashboard-sidebar__link dashboard-sidebar__link--active"
      : "dashboard-sidebar__link";
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="dashboard-sidebar">
      <div>
        <span className="dashboard-sidebar__title">MENU</span>

        <nav
          className="dashboard-sidebar__navigation"
          aria-label="Dashboard navigation"
        >
          <NavLink className={getNavigationClass} to="/dashboard" end>
            <LayoutDashboard size={21} />
            Overview
          </NavLink>

          <NavLink className={getNavigationClass} to="/dashboard/my-courses">
            <BookOpen size={21} />
            My Courses
          </NavLink>

          <NavLink className={getNavigationClass} to="/dashboard/settings">
            <Settings size={21} />
            Settings
          </NavLink>
        </nav>
      </div>

      <div className="dashboard-sidebar__bottom">
        <div className="dashboard-sidebar__profile">
          <span className="dashboard-sidebar__avatar">
            {user?.name.charAt(0).toUpperCase() || "Y"}
          </span>

          <div>
            <strong>{user?.name || "you"}</strong>
            <span>student</span>
          </div>
        </div>

        <button
          className="dashboard-sidebar__sign-out"
          type="button"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
