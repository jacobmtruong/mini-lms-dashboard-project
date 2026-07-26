import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseGrid from "../../components/course/CourseGrid";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import "./MyCoursesPage.scss";

function MyCoursesPage() {
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => {
    return state.courses.items;
  });

  const status = useAppSelector((state) => {
    return state.courses.status;
  });

  const error = useAppSelector((state) => {
    return state.courses.error;
  });

  const enrolledCourses = courses.filter((course) => {
    return course.enrolled;
  });

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function renderMyCourses() {
    if (status === "idle" || status === "loading") {
      return <CourseLoadingState message="Loading your courses..." />;
    }

    if (status === "failed") {
      return (
        <CourseErrorState
          message={error || "Unable to load your courses."}
          onRetry={handleRetry}
        />
      );
    }

    if (enrolledCourses.length === 0) {
      return (
        <div className="my-courses-empty">
          <span className="my-courses-empty__icon">
            <BookOpen size={34} />
          </span>

          <h2>No enrolled courses yet</h2>

          <p>
            Explore the available courses and enroll in one to begin your
            learning journey.
          </p>

          <Link className="my-courses-empty__button" to="/courses">
            Browse Courses
          </Link>
        </div>
      );
    }

    return (
      <div className="my-courses-page__grid">
        <CourseGrid courses={enrolledCourses} showFavoriteButton={false} />
      </div>
    );
  }

  return (
    <section className="my-courses-page">
      <div className="my-courses-page__heading">
        <div>
          <h1>My Courses</h1>

          <p>Manage and continue your enrolled courses.</p>
        </div>

        {status === "succeeded" && (
          <span className="my-courses-page__count">
            <BookOpen size={18} />
            {enrolledCourses.length} enrolled
          </span>
        )}
      </div>

      <div className="my-courses-page__content">{renderMyCourses()}</div>
    </section>
  );
}

export default MyCoursesPage;
