import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import CourseGrid from "../../components/course/CourseGrid";
import { courses } from "../../data/courses";
import "./MyCoursesPage.scss";

function MyCoursesPage() {
  const enrolledCourses = courses.filter((course) => {
    return course.enrolled;
  });

  return (
    <section className="my-courses-page">
      <div className="my-courses-page__heading">
        <div>
          <h1>My Courses</h1>

          <p>Manage and continue your enrolled courses.</p>
        </div>

        <span className="my-courses-page__count">
          <BookOpen size={18} />
          {enrolledCourses.length} enrolled
        </span>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="my-courses-page__grid">
          <CourseGrid courses={enrolledCourses} showFavoriteButton={false} />
        </div>
      ) : (
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
      )}
    </section>
  );
}

export default MyCoursesPage;
