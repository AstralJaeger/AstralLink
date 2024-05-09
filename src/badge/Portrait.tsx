import './Portrait.css'
import { Badge } from "../model.ts";

type PortraitProps = {
  badge: Badge;
}

const Portrait: React.FC<PortraitProps> = ({ badge }) => {
  return (
    <img className="w-48 h-48 rounded-full border-2 border-gray-600 content-center" src={badge.image} alt="profile-picture phoenix" />
  )
}

export default Portrait;