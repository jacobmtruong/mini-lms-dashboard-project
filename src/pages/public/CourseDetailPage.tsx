import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseDetail from "../../components/course/CourseDetail";
import CourseNotFound from "../../components/course/CourseNotFound";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import "./CourseDetailPage.scss";

function CourseDetailPage() {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();

  const courses = useAppSelector((state) => {
    return state.courses.items;
  });

  const status = useAppSelector((state) => {
    return state.courses.status;
  });

  const error = useAppSelector((state) => {
    return state.courses.error;
  });

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
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

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;
