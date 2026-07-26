import { BarChart3, BookOpen, Clock3, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../data/courses";

function CourseDetailPage() {
  const { courseId } = useParams();

  const course = courses.find((item) => {
    return item.id === Number(courseId);
  });

  if (!course) {
    return (
      <section className="not-found-page">
        <div className="page-container not-found-page__content">
          <span className="not-found-page__code">404</span>

          <h1>Course not found</h1>

          <p>
            The course you are looking for does not exist or may have been
            removed.
          </p>

          <Link className="button button--primary" to="/courses">
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="course-detail-page">
      <div className="course-detail-hero">
        <div className="page-container">
          <div className="course-detail-hero__badges">
            <span>{course.category.toLowerCase()}</span>
            <span className="course-detail-hero__published">Published</span>
          </div>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="course-detail-hero__information">
            <span>
              <UserRound size={18} />
              {course.instructor.name}
            </span>

            <span>
              <Clock3 size={18} />
              {course.duration}
            </span>

            <span>
              <BookOpen size={18} />
              {course.lessons} Lessons
            </span>

            <span>
              <BarChart3 size={18} />
              {course.level}
            </span>
          </div>
        </div>
      </div>

      <div className="page-container course-detail-preview">
        <div>
          <h2>About This Course</h2>

          <p>
            This is the beginning of the course detail page. In the next course
            detail task, we will add the complete learning outcomes, course
            modules, purchase card, favorite button, and enrollment actions.
          </p>
        </div>

        <div className="course-detail-preview__price">
          <span>Course price</span>
          <strong>${course.price}</strong>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailPage;
