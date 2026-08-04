import { Heart } from "lucide-react";
import type { Course } from "../../types/course";

type CoursePurchaseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (courseId: number) => void;
};

function CoursePurchaseCard({
  course,
  isFavorite,
  onToggleFavorite,
}: CoursePurchaseCardProps) {
  function handleFavoriteClick() {
    onToggleFavorite(course.id);
  }

  return (
    <aside className="course-purchase-card">
      <img
        className="course-purchase-image"
        src={course.image}
        alt={course.title}
      />

      <div className="course-purchase-price-row">
        <strong>${course.price}</strong>

        <button
          className={
            isFavorite
              ? "course-detail-favorite-button course-detail-favorite-button--active"
              : "course-detail-favorite-button"
          }
          type="button"
          aria-label={
            isFavorite
              ? `Remove ${course.title} from favorites`
              : `Add ${course.title} to favorites`
          }
          onClick={handleFavoriteClick}
        >
          <Heart size={23} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <button
        className="course-purchase-button course-purchase-button--primary"
        type="button"
      >
        Enroll Now
      </button>

      <button
        className="course-purchase-button course-purchase-button--secondary"
        type="button"
      >
        Preview Course
      </button>

      <p className="course-money-back-message">30-Day Money-Back Guarantee</p>
    </aside>
  );
}

export default CoursePurchaseCard;
