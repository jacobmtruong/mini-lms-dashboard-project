import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import DashboardStats from "../../components/dashboard/DashboardStats";
import RecommendedCourses from "../../components/dashboard/RecommendedCourses";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import "./DashboardPage.scss";

function DashboardPage() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => {
    return state.auth.user;
  });

  const courseStatus = useAppSelector((state) => {
    return state.courses.status;
  });

  const courseError = useAppSelector((state) => {
    return state.courses.error;
  });

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function renderDashboardContent() {
    if (courseStatus === "idle" || courseStatus === "loading") {
      return <CourseLoadingState message="Loading your dashboard..." />;
    }

    if (courseStatus === "failed") {
      return (
        <CourseErrorState
          message={courseError || "Unable to load dashboard courses."}
          onRetry={handleRetry}
        />
      );
    }

    return (
      <>
        <DashboardStats />

        <div className="dashboard-overview-grid">
          <ContinueLearning />
          <RecommendedCourses />
        </div>
      </>
    );
  }

  return (
    <section className="dashboard-overview-page">
      <div className="dashboard-page-heading">
        <h1>Welcome back, {user?.name || "you"}!</h1>

        <p>
          Here&apos;s what&apos;s happening with your learning journey today.
        </p>
      </div>

      <div className="dashboard-overview-content">
        {renderDashboardContent()}
      </div>
    </section>
  );
}

export default DashboardPage;
