import type { Course } from "../../types/course";
import CourseContent from "./CourseContent";
import CourseDetailHero from "./CourseDetailHero";
import CourseLearningList from "./CourseLearningList";
import CoursePurchaseCard from "./CoursePurchaseCard";

type CourseDetailProps = {
  course: Course;
};

function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="course-detail">
      <CourseDetailHero course={course} />

      <div className="page-container course-detail-layout">
        <div className="course-detail-information">
          <section className="course-about-section">
            <h2>About This Course</h2>

            <p>
              Learn the essential concepts and practical techniques needed to
              master {course.title}. This course combines clear explanations
              with hands-on exercises so you can apply each lesson to a real
              project.
            </p>
          </section>

          <CourseLearningList />

          <CourseContent />
        </div>

        <CoursePurchaseCard course={course} />
      </div>
    </div>
  );
}

export default CourseDetail;
