import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-8 mb-2 flex flex-row flex-wrap items-center rounded-lg bg-gray-700 shadow-sm">
      <div className="mx-auto w-full max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-200 sm:text-center">
          © 2023{" "}
          <a
            href="https://astraljaeger.dev/?q=footer"
            className="hover:underline"
          >
            AstralJaeger™
          </a>
          .
        </div>
        <div className="mt-3 text-sm text-gray-200 sm:mt-0">
          <a href="https://gitlab.com/ajxhome/link" className="hover:underline">
            <FontAwesomeIcon icon={faGitlab} size="lg" /> GitLab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
