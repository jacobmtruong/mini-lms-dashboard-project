import type { Course } from "../../types/course";
import CourseCard from "./CourseCard";

type CourseGridProps = {
  courses: Course[];
  favoriteCourseIds?: number[];
  showFavoriteButton?: boolean;
  onToggleFavorite?: (courseId: number) => void;
};

function CourseGrid({
  courses,
  favoriteCourseIds = [],
  showFavoriteButton = true,
  onToggleFavorite,
}: CourseGridProps) {
  return (
    <div className="course-grid">
      {courses.map((course) => {
        const isFavorite = favoriteCourseIds.includes(course.id);

        return (
          <CourseCard
            key={course.id}
            course={course}
            isFavorite={isFavorite}
            showFavoriteButton={showFavoriteButton}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </div>
  );
}

export default CourseGrid;
