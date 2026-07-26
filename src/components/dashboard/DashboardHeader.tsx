import { LayoutDashboard, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import Logo from "../shared/Logo";

function DashboardHeader() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  const userInitial = user?.name.charAt(0).toUpperCase() || "Y";

  return (
    <header className="dashboard-header">
      <div className="dashboard-header__left">
        <Logo />

        <nav
          className="dashboard-header__public-navigation"
          aria-label="Public navigation"
        >
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>

      <div className="dashboard-header__right">
        <Link className="dashboard-header__dashboard-link" to="/dashboard">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <span className="dashboard-header__divider" />

        <div className="dashboard-header__user">
          <span className="dashboard-header__avatar">{userInitial}</span>

          <span className="dashboard-header__username">
            {user?.name || "you"}
          </span>
        </div>

        <button
          className="dashboard-header__logout"
          type="button"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;
