import SocialLink from "./SocialLink.tsx";
import {Social} from "../model.ts";

type SocialLinksProps = {
  socials: Social[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({socials}) => {
  return (
    <>
      {
        socials.map( (social) => (
          <SocialLink social={social} />
        ))
      }
    </>
  )
}

export default SocialLinks;