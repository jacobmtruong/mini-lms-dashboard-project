import { Link } from "react-router-dom";
import { courses } from "../../data/courses";

function RecommendedCourses() {
  const designCourse = courses.find((course) => {
    return course.title === "UI/UX Design Masterclass";
  });

  const backendCourse = courses.find((course) => {
    return course.title === "Advanced Node.js & Microservices";
  });

  return (
    <section className="dashboard-panel recommended-courses">
      <div className="dashboard-panel__heading">
        <h2>Recommended for You</h2>

        <Link to="/courses">Browse</Link>
      </div>

      <div className="recommended-courses__list">
        {designCourse && (
          <article className="recommendation-card recommendation-card--blue">
            <h3>{designCourse.title}</h3>

            <p>Expand your skillset with design principles.</p>

            <Link to={`/courses/${designCourse.id}`}>View Course</Link>
          </article>
        )}

        {backendCourse && (
          <article className="recommendation-card recommendation-card--purple">
            <h3>GraphQL with Apollo Server</h3>

            <p>Perfect next step for your backend journey.</p>

            <Link to={`/courses/${backendCourse.id}`}>View Course</Link>
          </article>
        )}
      </div>
    </section>
  );
}

export default RecommendedCourses;
