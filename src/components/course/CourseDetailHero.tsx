import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Clock3,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../../types/course";

type CourseDetailHeroProps = {
  course: Course;
};

function CourseDetailHero({ course }: CourseDetailHeroProps) {
  return (
    <section className="course-detail-hero-section">
      <div className="page-container">
        <Link className="course-detail-back-link" to="/courses">
          <ArrowLeft size={18} />
          Back to Courses
        </Link>

        <div className="course-detail-badges">
          <span className="course-detail-category-badge">
            {course.category.toLowerCase()}
          </span>

          <span className="course-detail-published-badge">Published</span>
        </div>

        <h1 className="course-detail-main-title">{course.title}</h1>

        <p className="course-detail-main-description">{course.description}</p>

        <div className="course-detail-meta">
          <span>
            <UserRound size={19} />
            {course.instructor.name}
          </span>

          <span>
            <Clock3 size={19} />
            {course.duration}
          </span>

          <span>
            <BookOpen size={19} />
            {course.lessons} Lessons
          </span>

          <span>
            <BarChart3 size={19} />
            {course.level}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailHero;
