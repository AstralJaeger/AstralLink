export interface Model {
  badge: Badge;
  bio: Bio;
  socials: Social[];
}

export interface Badge {
  image: string;
  qrCodeImage: string;
}

export interface Bio {
  name: string;
  tag: string;
  bio: string;
}

export interface Social {
  key: number;
  name: string;
  url: string;
  icon: string;
}

export enum BadgeState {
  PICTURE,
  QR_CODE,
}

export const getModel = (): Model => {
  return {
    badge: {
      image: "./src/assets/phoenix.svg",
      qrCodeImage: "./src/assets/qrcode.svg",
    },
    bio: {
      name: "Felix Hillebrand",
      tag: "@AstralJaeger",
      bio: "DevOps specialist and software developer by passion.",
    },
    socials: [
      {
        key: 0,
        name: "Discord",
        url: "https://discord.com/users/299862332530753537",
        icon: "discord",
      },
      {
        key: 1,
        name: "Signal",
        url: "https://signal.me/#eu/qlIwDnZTYz4n9SGmwLBf0p80p37Lz_nkkHZmYTDEEtnJtv8lW89M_IzzU567afal",
        icon: "signal",
      },
      {
        key: 2,
        name: "GitHub",
        url: "https://github.com/AstralJaeger",
        icon: "github",
      },
      {
        key: 3,
        name: "GitLab",
        url: "https://gitlab.com/AstralJaeger",
        icon: "gitlab",
      },
      {
        key: 4,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felix-hillebrand-4a194a215/",
        icon: "linkedin",
      },
    ],
  };
};
