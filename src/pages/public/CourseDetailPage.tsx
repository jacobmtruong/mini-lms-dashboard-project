import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import CourseDetail from "../../components/course/CourseDetail";
import CourseNotFound from "../../components/course/CourseNotFound";
import "./CourseDetailPage.scss";

function CourseDetailPage() {
  const { courseId } = useParams();

  const courses = useAppSelector((state) => state.courses.items);

  const numericCourseId = Number(courseId);

  const course = courses.find((item) => {
    return item.id === numericCourseId;
  });

  if (!course) {
    return <CourseNotFound />;
  }

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;
