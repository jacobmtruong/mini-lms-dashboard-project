import "./CourseState.scss";

type CourseLoadingStateProps = {
  message?: string;
};

function CourseLoadingState({
  message = "Loading courses...",
}: CourseLoadingStateProps) {
  return (
    <div className="course-state course-state--loading">
      <span className="course-state__spinner" />

      <h2>{message}</h2>

      <p>Please wait while we prepare the course information.</p>
    </div>
  );
}

export default CourseLoadingState;
