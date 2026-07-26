import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";

function PublicLayout() {
  return (
    <div className="public-layout">
      <PublicHeader />

      <main className="public-layout__main">
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
