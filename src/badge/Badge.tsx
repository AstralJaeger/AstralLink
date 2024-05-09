import {Badge as BadgeType, Bio} from "../model.ts";
import Portrait from "./Portrait.tsx";

type BadgeProps = {
  badge: BadgeType;
  bio: Bio;
};

const Badge: React.FC<BadgeProps> = ({ badge, bio}) => {
  return (
    <header>
      <Portrait badge={badge} />
      <h1 className="text-3xl font-bold text-center">{ bio.name }</h1>
      <h2 className="text-2xl text-center">{ bio.tag }</h2>
      <p className="text-1xl text-center">{ bio.bio }</p>
    </header>
  )
}

export default Badge;