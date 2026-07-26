import { CircleAlert, RotateCcw } from "lucide-react";
import "./CourseState.scss";

type CourseErrorStateProps = {
  message: string;
  onRetry: () => void;
};

function CourseErrorState({ message, onRetry }: CourseErrorStateProps) {
  return (
    <div className="course-state course-state--error">
      <span className="course-state__icon">
        <CircleAlert size={36} />
      </span>

      <h2>Something went wrong</h2>

      <p>{message}</p>

      <button className="course-state__button" type="button" onClick={onRetry}>
        <RotateCcw size={18} />
        Try Again
      </button>
    </div>
  );
}

export default CourseErrorState;
