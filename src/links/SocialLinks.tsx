import SocialLink from "./SocialLink.tsx";
import { Social } from "../model.ts";

type SocialLinksProps = {
  socials: Social[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {socials.map((social) => (
        <SocialLink key={social.name} social={social} />
      ))}
    </div>
  );
};

export default SocialLinks;
