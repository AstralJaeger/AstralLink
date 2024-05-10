import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mb-2 mt-8 flex flex-row flex-wrap items-center rounded-lg bg-gray-700 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
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
          <a
            href="https://github.com/AstralJaeger/LinkBeam"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
