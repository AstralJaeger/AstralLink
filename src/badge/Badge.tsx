import { Badge as BadgeType, Bio } from "../model.ts";
import Portrait from "./Portrait.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type BadgeProps = {
  badge: BadgeType;
  bio: Bio;
};

const Badge: React.FC<BadgeProps> = ({ badge, bio }) => {
  return (
    <header className="m-4 flex flex-col items-center justify-center text-gray-300">
      <Portrait badge={badge} />
      <h1 className="m-2 ml-8 mr-8 flex-1 text-center text-3xl font-bold">
        {bio.name}
      </h1>
      <div className="ml-8 mr-8 flex-1 text-center">
        <FontAwesomeIcon icon={faIdBadge} size="lg" className="" />
        <h2 className="m-2 inline text-2xl">{bio.tag}</h2>
      </div>

      <p className="text-1xl m-2 ml-8 mr-8 flex-1 text-center">{bio.bio}</p>

      <div className="m-2 flex w-96 flex-1 flex-row items-center justify-center">
        {bio.languages.map((language) => (
          <div key={language.icon} className="m-1">
            <a href={language.url} target="_blank" rel="noopener noreferrer">
              <img
                className="max-h-16 max-w-16"
                src={`https://skillicons.dev/icons?i=${language.icon}&theme=dark`}
                alt={language.icon}
                title={language.icon}
              />
            </a>
          </div>
        ))}
      </div>

      <div className="m-2 flex w-96 flex-1 flex-row flex-wrap items-center justify-center">
        {bio.tools.map((tool) => (
          <div key={tool.icon} className="m-1">
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <img
                className="max-h-16 max-w-16"
                src={`https://skillicons.dev/icons?i=${tool.icon}&theme=dark`}
                alt={tool.icon}
              />
            </a>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Badge;
