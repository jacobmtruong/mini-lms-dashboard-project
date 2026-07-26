import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-hero">
      <div className="page-container home-hero__content">
        <span className="home-hero__badge">New courses available</span>

        <h1 className="home-hero__title">
          Unlock Your Potential with <span>Expert-Led</span> Courses
        </h1>

        <p className="home-hero__description">
          Master the latest skills in coding, design, and business. Learn from
          industry experts and take your career to the next level.
        </p>

        <div className="home-hero__actions">
          <Link className="button button--primary" to="/courses">
            Browse Courses
            <ArrowRight size={18} />
          </Link>

          <Link className="button button--secondary" to="/login">
            Start Free Trial
          </Link>
        </div>

        <div className="home-hero__benefits">
          <span>
            <CheckCircle2 size={17} />
            Lifetime Access
          </span>

          <span>
            <CheckCircle2 size={17} />
            Expert Instructors
          </span>

          <span>
            <CheckCircle2 size={17} />
            Certificate of Completion
          </span>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
