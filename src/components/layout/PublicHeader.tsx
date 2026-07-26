import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";

function PublicHeader() {
  return (
    <header className="public-header">
      <div className="public-header__container">
        <Logo />

        <nav className="public-header__navigation" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "public-header__link public-header__link--active"
                : "public-header__link"
            }
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "public-header__link public-header__link--active"
                : "public-header__link"
            }
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "public-header__link public-header__link--active"
                : "public-header__link"
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
        </nav>

        <NavLink className="button button--primary button--small" to="/login">
          Log In
        </NavLink>
      </div>
    </header>
  );
}

export default PublicHeader;
