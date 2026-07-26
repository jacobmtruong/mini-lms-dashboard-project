import { CirclePlay } from "lucide-react";

type CourseModule = {
  id: number;
  title: string;
  duration: string;
};

const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Module 1: Introduction to Topic",
    duration: "15:00",
  },
  {
    id: 2,
    title: "Module 2: Introduction to Topic",
    duration: "15:00",
  },
  {
    id: 3,
    title: "Module 3: Introduction to Topic",
    duration: "15:00",
  },
  {
    id: 4,
    title: "Module 4: Introduction to Topic",
    duration: "15:00",
  },
  {
    id: 5,
    title: "Module 5: Introduction to Topic",
    duration: "15:00",
  },
];

function CourseContent() {
  return (
    <section className="course-content-section">
      <h2>Course Content</h2>

      <div className="course-module-list">
        {courseModules.map((module) => {
          return (
            <button className="course-module-row" type="button" key={module.id}>
              <span className="course-module-name">
                <CirclePlay size={19} />
                {module.title}
              </span>

              <span className="course-module-duration">{module.duration}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default CourseContent;
