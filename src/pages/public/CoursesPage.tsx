import { Search, SlidersHorizontal } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseGrid from "../../components/course/CourseGrid";
import CourseEmptyState from "../../components/shared/CourseEmptyState";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";

function CoursesPage() {
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

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function renderCourseContent() {
    if (status === "idle" || status === "loading") {
      return <CourseLoadingState />;
    }

    if (status === "failed") {
      return (
        <CourseErrorState
          message={error || "Unable to load courses."}
          onRetry={handleRetry}
        />
      );
    }

    if (status === "succeeded" && courses.length === 0) {
      return <CourseEmptyState />;
    }

    return <CourseGrid courses={courses} />;
  }

  return (
    <section className="courses-page">
      <div className="page-container">
        <div className="courses-page__top">
          <div>
            <h1 className="page-title">Explore Courses</h1>

            <p className="page-description">
              Discover new skills and advance your career path.
            </p>
          </div>

          <div className="courses-page__controls">
            <label className="search-field">
              <Search size={18} />

              <input
                type="search"
                placeholder="Search courses..."
                aria-label="Search courses"
              />
            </label>

            <label className="category-select">
              <SlidersHorizontal size={18} />

              <select aria-label="Filter courses by category">
                <option value="all">All Categories</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="design">Design</option>
                <option value="devops">DevOps</option>
                <option value="mobile">Mobile</option>
                <option value="cybersecurity">Cybersecurity</option>
              </select>
            </label>
          </div>
        </div>

        {renderCourseContent()}
      </div>
    </section>
  );
}

export default CoursesPage;
