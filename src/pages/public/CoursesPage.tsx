import { Search, SlidersHorizontal } from "lucide-react";
import CourseGrid from "../../components/course/CourseGrid";
import { useAppSelector } from "../../app/hooks";

function CoursesPage() {
  const courses = useAppSelector((state) => state.courses.items);

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

        <CourseGrid courses={courses} />
      </div>
    </section>
  );
}

export default CoursesPage;
