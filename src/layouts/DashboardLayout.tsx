import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import "./DashboardLayout.scss";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />

      <div className="dashboard-layout__body">
        <DashboardSidebar />

        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
