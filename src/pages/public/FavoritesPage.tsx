import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function FavoritesPage() {
  return (
    <section className="favorites-page">
      <div className="page-container">
        <h1 className="page-title">Favorite Courses</h1>

        <p className="page-description">Courses you&apos;ve saved for later.</p>

        <div className="favorites-empty">
          <span className="favorites-empty__icon">
            <Heart size={34} />
          </span>

          <h2>No favorites yet</h2>

          <p>
            You haven&apos;t added any courses to your favorites yet. Browse
            courses and click the heart icon to save them.
          </p>

          <Link className="button button--primary" to="/courses">
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FavoritesPage;
