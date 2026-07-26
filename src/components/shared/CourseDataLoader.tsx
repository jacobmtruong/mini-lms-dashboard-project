import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCourses } from "../../features/courses/coursesSlice";

function CourseDataLoader() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => {
    return state.courses.status;
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(
        fetchCourses({
          shouldFail: false,
        }),
      );
    }
  }, [dispatch, status]);

  return null;
}

export default CourseDataLoader;
