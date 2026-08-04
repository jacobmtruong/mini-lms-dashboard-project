import { Search, SlidersHorizontal } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseGrid from "../../components/course/CourseGrid";
import CourseEmptyState from "../../components/shared/CourseEmptyState";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";

function CoursesPage() {
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.items);
  const status = useAppSelector((state) => state.courses.status);
  const error = useAppSelector((state) => state.courses.error);

  const favoriteCourseIds = useAppSelector((state) => {
    return state.favorites.courseIds;
  });

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const normalizedSearch = searchText.trim().toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(normalizedSearch) ||
      course.description.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "all" ||
      course.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(event.target.value);
  }

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

    if (filteredCourses.length === 0) {
      return (
        <CourseEmptyState
          title="No matching courses"
          message="Try changing your search text or selected category."
        />
      );
    }

    return (
      <CourseGrid
        courses={filteredCourses}
        favoriteCourseIds={favoriteCourseIds}
        onToggleFavorite={handleToggleFavorite}
      />
    );
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
                value={searchText}
                placeholder="Search courses..."
                aria-label="Search courses"
                onChange={handleSearchChange}
              />
            </label>

            <label className="category-select">
              <SlidersHorizontal size={18} />

              <select
                value={selectedCategory}
                aria-label="Filter courses by category"
                onChange={handleCategoryChange}
              >
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
