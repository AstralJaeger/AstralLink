import React from "react";
import { Social } from "../model.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSignalMessenger,
  faGithub,
  faGitlab,
  faLinkedin,
  faInstagram,
  faTiktok,
  faYoutube,
  faTwitch,
  faPatreon,
  faXTwitter,
  faMastodon,
  faBluesky,
  faFacebook,
  faThreads,
  faReddit,
  faPinterest,
  faSpotify,
  faSoundcloud,
  faTumblr,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faGlobe,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

type SocialLinkProps = {
  social: Social;
};

// Maps a `social.icon` slug (set in src/site.config.ts) to a brand icon.
// Add new entries here if you need a platform that isn't listed yet.
const iconMap: Record<string, typeof faUser> = {
  discord: faDiscord,
  signal: faSignalMessenger,
  github: faGithub,
  gitlab: faGitlab,
  linkedin: faLinkedin,
  instagram: faInstagram,
  tiktok: faTiktok,
  youtube: faYoutube,
  twitch: faTwitch,
  patreon: faPatreon,
  "ko-fi": faMugHot,
  kofi: faMugHot,
  x: faXTwitter,
  twitter: faXTwitter,
  mastodon: faMastodon,
  bluesky: faBluesky,
  facebook: faFacebook,
  threads: faThreads,
  reddit: faReddit,
  pinterest: faPinterest,
  spotify: faSpotify,
  soundcloud: faSoundcloud,
  tumblr: faTumblr,
  telegram: faTelegram,
  whatsapp: faWhatsapp,
  email: faEnvelope,
  website: faGlobe,
};

const getIcon = (iconName: string) => {
  return iconMap[iconName] ?? faUser;
};

const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  return (
    <div className="m-2 w-full rounded-lg bg-gradient-to-tl from-surface to-accent p-px shadow hover:bg-gradient-to-br">
      <div className="rounded-lg bg-surface p-3 text-fg hover:text-accent">
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
