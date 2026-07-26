import type { Course } from "../../types/course";
import CourseCard from "./CourseCard";

type CourseGridProps = {
  courses: Course[];
};

function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="course-grid">
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}

export default CourseGrid;
