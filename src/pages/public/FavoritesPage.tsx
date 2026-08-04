import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseGrid from "../../components/course/CourseGrid";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";

function FavoritesPage() {
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.items);
  const status = useAppSelector((state) => state.courses.status);
  const error = useAppSelector((state) => state.courses.error);

  const favoriteCourseIds = useAppSelector((state) => {
    return state.favorites.courseIds;
  });

  const favoriteCourses = courses.filter((course) => {
    return favoriteCourseIds.includes(course.id);
  });

  function handleToggleFavorite(courseId: number) {
    dispatch(toggleFavorite(courseId));
  }

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function renderFavorites() {
    if (status === "idle" || status === "loading") {
      return <CourseLoadingState message="Loading favorites..." />;
    }

    if (status === "failed") {
      return (
        <CourseErrorState
          message={error || "Unable to load your favorites."}
          onRetry={handleRetry}
        />
      );
    }

    if (favoriteCourses.length === 0) {
      return (
        <div className="favorites-empty">
          <span className="favorites-empty__icon">
            <Star size={34} />
          </span>

          <h2>No favorites yet</h2>

          <p>
            You haven&apos;t added any courses to your favorites yet. Browse
            courses and click the star icon to save them.
          </p>

          <Link className="button button--primary" to="/courses">
            Browse Courses
          </Link>
        </div>
      );
    }

    return (
      <CourseGrid
        courses={favoriteCourses}
        favoriteCourseIds={favoriteCourseIds}
        onToggleFavorite={handleToggleFavorite}
      />
    );
  }

  return (
    <section className="favorites-page">
      <div className="page-container">
        <h1 className="page-title">Favorite Courses</h1>

        <p className="page-description">Courses you&apos;ve saved for later.</p>

        <div className="favorites-page__content">{renderFavorites()}</div>
      </div>
    </section>
  );
}

export default FavoritesPage;
