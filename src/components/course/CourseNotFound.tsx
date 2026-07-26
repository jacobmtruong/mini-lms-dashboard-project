import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

function CourseNotFound() {
  return (
    <section className="course-not-found">
      <div className="course-not-found-card">
        <span className="course-not-found-icon">
          <SearchX size={38} />
        </span>

        <span className="course-not-found-code">404</span>

        <h1>Course not found</h1>

        <p>
          The course you are looking for does not exist or may have been
          removed.
        </p>

        <Link className="course-not-found-button" to="/courses">
          <ArrowLeft size={18} />
          Back to Courses
        </Link>
      </div>
    </section>
  );
}

export default CourseNotFound;
