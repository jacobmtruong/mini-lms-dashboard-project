import { Heart } from "lucide-react";
import type { Course } from "../../types/course";

type CoursePurchaseCardProps = {
  course: Course;
};

function CoursePurchaseCard({ course }: CoursePurchaseCardProps) {
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
          className="course-detail-favorite-button"
          type="button"
          aria-label={`Add ${course.title} to favorites`}
        >
          <Heart size={23} />
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
