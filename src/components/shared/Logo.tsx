import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Go to EduPro home page">
      <span className="logo__icon">
        <GraduationCap size={22} strokeWidth={2} />
      </span>

      <span className="logo__text">EduPro</span>
    </Link>
  );
}

export default Logo;
