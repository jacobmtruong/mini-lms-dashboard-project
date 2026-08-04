import { Outlet } from "react-router-dom";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";
import "./PublicLayout.scss";

function PublicLayout() {
  return (
    <div className="public-layout">
      <PublicHeader />

      <main className="public-layout__main">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}

export default PublicLayout;
