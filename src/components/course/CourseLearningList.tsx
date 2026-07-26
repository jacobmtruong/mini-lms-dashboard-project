import { CircleCheck } from "lucide-react";

const learningOutcomes = [
  "Understand the core concepts and important techniques.",
  "Build responsive layouts for desktop and mobile screens.",
  "Organize code into clear and reusable components.",
  "Apply modern development practices to real projects.",
  "Improve problem-solving and debugging skills.",
  "Create a complete project ready for your portfolio.",
];

function CourseLearningList() {
  return (
    <section className="course-learning-section">
      <h2>What You&apos;ll Learn</h2>

      <div className="course-learning-grid">
        {learningOutcomes.map((outcome) => {
          return (
            <div className="course-learning-item" key={outcome}>
              <CircleCheck size={21} />

              <span>{outcome}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CourseLearningList;
