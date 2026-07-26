import type { Course } from "../../types/course";
import CourseCard from "./CourseCard";

type CourseGridProps = {
  courses: Course[];
  showFavoriteButton?: boolean;
};

function CourseGrid({ courses, showFavoriteButton = true }: CourseGridProps) {
  return (
    <div className="course-grid">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            course={course}
            showFavoriteButton={showFavoriteButton}
          />
        );
      })}
    </div>
  );
}

export default CourseGrid;
