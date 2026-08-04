import { BarChart3, BookOpen, Star, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../../types/course";

type CourseCardProps = {
  course: Course;
  isFavorite?: boolean;
  showFavoriteButton?: boolean;
  onToggleFavorite?: (courseId: number) => void;
};

function CourseCard({
  course,
  isFavorite = false,
  showFavoriteButton = true,
  onToggleFavorite,
}: CourseCardProps) {
  function handleFavoriteClick() {
    if (!onToggleFavorite) {
      return;
    }

    onToggleFavorite(course.id);
  }

  const categoryClass = course.category.toLowerCase();

  return (
    <article className="course-card">
      <div className="course-card__image-wrapper">
        <Link to={`/courses/${course.id}`} aria-label={`View ${course.title}`}>
          <img
            className="course-card__image"
            src={course.image}
            alt={course.title}
          />
        </Link>

        <span
          className={`course-card__category course-card__category--${categoryClass}`}
        >
          {categoryClass}
        </span>

        {showFavoriteButton && (
          <button
            className={
              isFavorite
                ? "course-card__favorite course-card__favorite--active"
                : "course-card__favorite"
            }
            type="button"
            title={
              isFavorite
                ? `Remove ${course.title} from favorites`
                : `Add ${course.title} to favorites`
            }
            aria-label={
              isFavorite
                ? `Remove ${course.title} from favorites`
                : `Add ${course.title} to favorites`
            }
            disabled={!onToggleFavorite}
            onClick={handleFavoriteClick}
          >
            <Star
              size={22}
              strokeWidth={2}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        )}
      </div>

      <div className="course-card__body">
        <Link className="course-card__title-link" to={`/courses/${course.id}`}>
          <h2 className="course-card__title">{course.title}</h2>
        </Link>

        <p className="course-card__description">{course.description}</p>

        <div className="course-card__information">
          <span className="course-card__information-item">
            <BookOpen size={17} />
            {course.lessons} Lessons
          </span>

          <span className="course-card__information-item">
            <BarChart3 size={17} />
            {course.level}
          </span>
        </div>

        <div className="course-card__category-row">
          <Tag size={17} />
          <span>{course.category}</span>
        </div>

        <div className="course-card__footer">
          <div className="course-card__instructor">
            <span className="course-card__avatar">
              {course.instructor.avatarText}
            </span>

            <span>{course.instructor.name}</span>
          </div>

          <strong className="course-card__price">${course.price}</strong>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
