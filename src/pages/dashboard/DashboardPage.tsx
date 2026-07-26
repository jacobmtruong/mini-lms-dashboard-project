import ContinueLearning from "../../components/dashboard/ContinueLearning";
import DashboardStats from "../../components/dashboard/DashboardStats";
import RecommendedCourses from "../../components/dashboard/RecommendedCourses";
import { useAuth } from "../../context/AuthContext";
import "./DashboardPage.scss";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <section className="dashboard-overview-page">
      <div className="dashboard-page-heading">
        <h1>Welcome back, {user?.name || "you"}!</h1>

        <p>
          Here&apos;s what&apos;s happening with your learning journey today.
        </p>
      </div>

      <DashboardStats />

      <div className="dashboard-overview-grid">
        <ContinueLearning />
        <RecommendedCourses />
      </div>
    </section>
  );
}

export default DashboardPage;
