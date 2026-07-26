import { BookOpen } from "lucide-react";
import "./CourseState.scss";

type CourseEmptyStateProps = {
  title?: string;
  message?: string;
};

function CourseEmptyState({
  title = "No courses available",
  message = "There are currently no courses to display.",
}: CourseEmptyStateProps) {
  return (
    <div className="course-state course-state--empty">
      <span className="course-state__icon">
        <BookOpen size={36} />
      </span>

      <h2>{title}</h2>

      <p>{message}</p>
    </div>
  );
}

export default CourseEmptyState;
