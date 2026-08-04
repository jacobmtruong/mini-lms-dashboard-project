import { BriefcaseBusiness, Code2, MessageCircle } from "lucide-react";
import Logo from "../shared/Logo";

function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="page-container public-footer__container">
        <Logo />

        <p className="public-footer__copyright">
          © 2026 EduPro LMS. All rights reserved.
        </p>

        <div className="public-footer__socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub"
          >
            <Code2 size={20} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Twitter"
          >
            <MessageCircle size={20} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit LinkedIn"
          >
            <BriefcaseBusiness size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
