import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

function ContinueLearning() {
  const courses = useAppSelector((state) => state.courses.items);

  const learningCourses = courses.filter((course) => {
    return course.enrolled && course.progress !== undefined;
  });

  const displayedCourses = learningCourses.slice(0, 2);

  return (
    <section className="dashboard-panel continue-learning">
      <div className="dashboard-panel__heading">
        <h2>Continue Learning</h2>

        <Link to="/dashboard/my-courses">View All</Link>
      </div>

      <div className="continue-learning__list">
        {displayedCourses.map((course) => {
          const remainingTime = course.id === 1 ? "4h 20m left" : "8h 15m left";

          return (
            <article className="learning-course" key={course.id}>
              <Link
                className="learning-course__image-link"
                to={`/courses/${course.id}`}
              >
                <img src={course.image} alt={course.title} />
              </Link>

              <div className="learning-course__content">
                <Link
                  className="learning-course__title"
                  to={`/courses/${course.id}`}
                >
                  {course.title}
                </Link>

                <p>{course.currentModule || "Continue your current module"}</p>

                <div className="learning-course__progress-information">
                  <span>{course.progress}% Complete</span>
                  <span>{remainingTime}</span>
                </div>

                <div
                  className="learning-course__progress-bar"
                  aria-label={`${course.progress}% course progress`}
                >
                  <span
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ContinueLearning;
