import { BookOpen, Clock3, LogOut, Medal, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./DashboardPage.scss";

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__container">
        <div className="dashboard-page__top">
          <div>
            <span className="dashboard-page__label">Private Dashboard</span>

            <h1>Welcome back, {user?.name}!</h1>

            <p>
              Here&apos;s what&apos;s happening with your learning journey
              today.
            </p>
          </div>

          <button
            className="dashboard-page__logout"
            type="button"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="dashboard-page__stats">
          <article className="dashboard-stat-card">
            <div>
              <span>Enrolled Courses</span>
              <strong>4</strong>
            </div>

            <span className="dashboard-stat-card__icon">
              <BookOpen size={25} />
            </span>
          </article>

          <article className="dashboard-stat-card">
            <div>
              <span>Hours Learned</span>
              <strong>26</strong>
            </div>

            <span className="dashboard-stat-card__icon">
              <Clock3 size={25} />
            </span>
          </article>

          <article className="dashboard-stat-card">
            <div>
              <span>Completed</span>
              <strong>2</strong>
            </div>

            <span className="dashboard-stat-card__icon">
              <Medal size={25} />
            </span>
          </article>

          <article className="dashboard-stat-card">
            <div>
              <span>Average Score</span>
              <strong>92%</strong>
            </div>

            <span className="dashboard-stat-card__icon">
              <TrendingUp size={25} />
            </span>
          </article>
        </div>

        <div className="dashboard-page__notice">
          <h2>Private route is working</h2>

          <p>
            This page can only be viewed after a successful login. The complete
            dashboard sidebar, header, course progress, and recommendations will
            be added in the dashboard task.
          </p>

          <p>
            Signed in as: <strong>{user?.email}</strong>
          </p>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
