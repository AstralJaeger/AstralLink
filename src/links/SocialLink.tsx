import React from "react";
import { Social } from "../model.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSignalMessenger,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

type SocialLinkProps = {
  social: Social;
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "discord":
      return faDiscord;
    case "signal":
      return faSignalMessenger;
    case "github":
      return faGithub;
    case "gitlab":
      return faGitlab;
    case "linkedin":
      return faLinkedin;
    default:
      return faUser;
  }
};

const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  return (
    <div className="m-2 w-full rounded-lg bg-gradient-to-tl from-gray-700 to-orange-500 p-px shadow hover:bg-gradient-to-br">
      <div className="rounded-lg bg-gray-700 p-3 text-gray-300 hover:text-orange-500">
        <a href={social.url} className="text-xl">
          <div className="flex w-full items-center justify-center">
            <FontAwesomeIcon
              icon={getIcon(social.icon)}
              size="lg"
              className="ml-2 mr-2"
            />
            <h2>{social.name}</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
