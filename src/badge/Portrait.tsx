import "./Portrait.css";
import { Badge, BadgeState } from "../model.ts";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQRCode } from "./fetchQRCode.ts";

type PortraitProps = {
  badge: Badge;
};

const toggleState = (state: BadgeState): BadgeState => {
  if (state === BadgeState.PICTURE) {
    return BadgeState.QR_CODE;
  }
  return BadgeState.PICTURE;
};

const Portrait: React.FC<PortraitProps> = ({ badge }) => {
  const [state, setState] = useState(BadgeState.PICTURE);

  const { data: qrCodeSvg, isLoading } = useQuery({
    queryKey: ["qrCode", badge.qrCodeImage],
    queryFn: fetchQRCode,
  });

  return (
    <div
      onClick={() => setState(toggleState(state))}
      className="gradient-bordered flex w-full items-center justify-center"
    >
      {state === BadgeState.PICTURE ? (
        <img
          className="m-2 h-64 w-64 content-center rounded-full p-2"
          src={badge.image}
          alt=""
        />
      ) : isLoading ? (
        <div className="m-2 h-64 w-64 content-center p-2">Loading...</div>
      ) : (
        <div
          className="m-2 h-64 w-64 content-center fill-gray-200 p-2"
          dangerouslySetInnerHTML={{ __html: qrCodeSvg || "" }}
        />
      )}
    </div>
  );
};

export default Portrait;
