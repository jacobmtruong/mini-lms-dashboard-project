import { ArrowLeft, BookOpen, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-page__card">
        <span className="not-found-page__icon">
          <SearchX size={42} strokeWidth={1.8} />
        </span>

        <span className="not-found-page__code">404</span>

        <h1>Page not found</h1>

        <p>
          The page you are looking for does not exist, has been moved, or the
          address may have been typed incorrectly.
        </p>

        <div className="not-found-page__actions">
          <Link
            className="not-found-page__button not-found-page__button--primary"
            to="/"
          >
            <Home size={18} />
            Go to Home
          </Link>

          <Link
            className="not-found-page__button not-found-page__button--secondary"
            to="/courses"
          >
            <BookOpen size={18} />
            Browse Courses
          </Link>
        </div>

        <Link className="not-found-page__back-link" to="/">
          <ArrowLeft size={17} />
          Return to the main website
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
