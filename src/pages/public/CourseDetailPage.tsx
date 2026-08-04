import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseDetail from "../../components/course/CourseDetail";
import CourseNotFound from "../../components/course/CourseNotFound";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";
import "./CourseDetailPage.scss";

function CourseDetailPage() {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();

  const courses = useAppSelector((state) => state.courses.items);
  const status = useAppSelector((state) => state.courses.status);
  const error = useAppSelector((state) => state.courses.error);

  const favoriteCourseIds = useAppSelector((state) => {
    return state.favorites.courseIds;
  });

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function handleToggleFavorite(selectedCourseId: number) {
    dispatch(toggleFavorite(selectedCourseId));
  }

  if (status === "idle" || status === "loading") {
    return (
      <section className="course-detail-page">
        <div className="page-container course-detail-page__state">
          <CourseLoadingState message="Loading course details..." />
        </div>
      </section>
    );
  }

  if (status === "failed") {
    return (
      <section className="course-detail-page">
        <div className="page-container course-detail-page__state">
          <CourseErrorState
            message={error || "Unable to load this course."}
            onRetry={handleRetry}
          />
        </div>
      </section>
    );
  }

  const numericCourseId = Number(courseId);

  const course = courses.find((item) => {
    return item.id === numericCourseId;
  });

  if (!course) {
    return <CourseNotFound />;
  }

  const isFavorite = favoriteCourseIds.includes(course.id);

  return (
    <CourseDetail
      course={course}
      isFavorite={isFavorite}
      onToggleFavorite={handleToggleFavorite}
    />
  );
}

export default CourseDetailPage;
