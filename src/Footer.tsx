import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "./site.config.ts";

const Footer = () => {
  const { name, year, url, repoUrl } = siteConfig.footer;

  return (
    <footer className="mb-2 mt-8 flex flex-row flex-wrap items-center rounded-lg bg-surface shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="text-sm text-muted sm:text-center">
          © {year}{" "}
          <a href={url} className="hover:underline">
            {name}
          </a>
          .
        </div>
        <div className="mt-3 text-sm text-muted sm:mt-0">
          <a href={repoUrl} className="hover:underline">
            <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
