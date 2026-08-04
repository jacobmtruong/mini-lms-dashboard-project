import { LayoutDashboard, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Logo from "../shared/Logo";

function PublicHeader() {
  const isLoggedIn = useAppSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function getNavigationClass({ isActive }: { isActive: boolean }) {
    return isActive
      ? "public-header__link public-header__link--active"
      : "public-header__link";
  }

  function handleMenuToggle() {
    setMenuIsOpen((currentValue) => {
      return !currentValue;
    });
  }

  function handleNavigationClick() {
    setMenuIsOpen(false);
  }

  return (
    <header className="public-header">
      <div className="page-container public-header__container">
        <Logo />

        <nav
          className={
            menuIsOpen
              ? "public-header__navigation public-header__navigation--open"
              : "public-header__navigation"
          }
          aria-label="Main navigation"
        >
          <NavLink
            className={getNavigationClass}
            to="/"
            end
            onClick={handleNavigationClick}
          >
            Home
          </NavLink>

          <NavLink
            className={getNavigationClass}
            to="/courses"
            onClick={handleNavigationClick}
          >
            Courses
          </NavLink>

          <NavLink
            className={getNavigationClass}
            to="/favorites"
            onClick={handleNavigationClick}
          >
            Favorites
          </NavLink>
        </nav>

        <div className="public-header__actions">
          {isLoggedIn ? (
            <NavLink className="public-header__action-button" to="/dashboard">
              <LayoutDashboard size={17} />
              Dashboard
            </NavLink>
          ) : (
            <NavLink className="public-header__action-button" to="/login">
              <LogIn size={17} />
              Log In
            </NavLink>
          )}

          <button
            className="public-header__menu-button"
            type="button"
            aria-label={
              menuIsOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuIsOpen}
            onClick={handleMenuToggle}
          >
            {menuIsOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default PublicHeader;
