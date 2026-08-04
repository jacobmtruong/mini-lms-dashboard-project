import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CourseGrid from "../../components/course/CourseGrid";
import CourseEmptyState from "../../components/shared/CourseEmptyState";
import CourseErrorState from "../../components/shared/CourseErrorState";
import CourseLoadingState from "../../components/shared/CourseLoadingState";
import { fetchCourses } from "../../features/courses/coursesSlice";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";
import "./HomePage.scss";

function HomePage() {
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.items);
  const courseStatus = useAppSelector((state) => state.courses.status);
  const courseError = useAppSelector((state) => state.courses.error);
  const favoriteCourseIds = useAppSelector(
    (state) => state.favorites.courseIds,
  );

  const featuredCourses = courses.filter((course) => course.featured);

  function handleToggleFavorite(courseId: number) {
    dispatch(toggleFavorite(courseId));
  }

  function handleRetry() {
    dispatch(
      fetchCourses({
        shouldFail: false,
      }),
    );
  }

  function renderFeaturedCourses() {
    if (courseStatus === "idle" || courseStatus === "loading") {
      return <CourseLoadingState message="Loading featured courses..." />;
    }

    if (courseStatus === "failed") {
      return (
        <CourseErrorState
          message={courseError || "Unable to load featured courses."}
          onRetry={handleRetry}
        />
      );
    }

    if (featuredCourses.length === 0) {
      return (
        <CourseEmptyState
          title="No featured courses"
          message="Featured courses will appear here when they are available."
        />
      );
    }

    return (
      <CourseGrid
        courses={featuredCourses}
        favoriteCourseIds={favoriteCourseIds}
        onToggleFavorite={handleToggleFavorite}
      />
    );
  }

  return (
    <div className="home-page">
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

      <section className="home-statistics">
        <div className="page-container home-statistics__grid">
          <article>
            <span className="home-statistics__icon">
              <Users size={23} />
            </span>
            <strong>10k+</strong>
            <p>Active Students</p>
          </article>

          <article>
            <span className="home-statistics__icon home-statistics__icon--purple">
              <GraduationCap size={23} />
            </span>
            <strong>120+</strong>
            <p>Expert Instructors</p>
          </article>

          <article>
            <span className="home-statistics__icon home-statistics__icon--green">
              <Zap size={23} />
            </span>
            <strong>500+</strong>
            <p>High-Quality Courses</p>
          </article>
        </div>
      </section>

      <section className="home-featured">
        <div className="page-container">
          <div className="home-section-heading">
            <div>
              <h2>Featured Courses</h2>
              <p>Hand-picked courses to get you started.</p>
            </div>

            <Link to="/courses">
              View All
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-featured__content">
            {renderFeaturedCourses()}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="page-container">
          <div className="home-cta__box">
            <h2>Ready to start learning?</h2>

            <p>
              Join thousands of students and start your journey to success
              today.
            </p>

            <Link to="/login">Get Started for Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
