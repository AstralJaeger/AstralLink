import React from "react";
import {Social} from "../model.ts";

type SocialLinkProps = {
  social: Social;
}

const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  return (
    <div className="m-4 bg-zinc-600 border-2 border-gray-200">
      <h2 className="m-2 text-xl text-gray-200">{ social.name }</h2>
      <p>{ social.icon } - { social.url }</p>
    </div>
  )
}

export default SocialLink;