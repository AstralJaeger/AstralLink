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
  languages: ToolBadge[];
  tools: ToolBadge[];
}

export interface ToolBadge {
  icon: string;
  url: string;
}

export interface Social {
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
      image: "/phoenix.svg",
      qrCodeImage: "/qrcode.svg",
    },
    bio: {
      name: "Felix Hillebrand",
      tag: "@AstralJaeger",
      bio: "DevOps specialist and chaotic evil software developer by passion",
      languages: [
        {
          icon: "rust",
          url: "https://www.rust-lang.org/",
        },
        {
          icon: "go",
          url: "https://go.dev/",
        },
        {
          icon: "java",
          url: "https://dev.java/",
        },
        {
          icon: "ts",
          url: "https://www.typescriptlang.org/",
        },
        {
          icon: "nodejs",
          url: "https://nodejs.org/en",
        },
        {
          icon: "python",
          url: "https://www.python.org/",
        },
      ],
      tools: [
        {
          icon: "docker",
          url: "https://www.docker.com/",
        },
        {
          icon: "kubernetes",
          url: "https://kubernetes.io/",
        },
        {
          icon: "openshift",
          url: "https://www.redhat.com/de/technologies/cloud-computing/openshift",
        },
        {
          icon: "prometheus",
          url: "https://prometheus.io/",
        },
        {
          icon: "rabbitmq",
          url: "https://www.rabbitmq.com/",
        },
        {
          icon: "bash",
          url: "https://www.gnu.org/software/bash/",
        },
        {
          icon: "powershell",
          url: "https://learn.microsoft.com/en-us/powershell/",
        },
        {
          icon: "aws",
          url: "https://aws.amazon.com/",
        },
        {
          icon: "azure",
          url: "https://azure.microsoft.com/de-de",
        },
        {
          icon: "firebase",
          url: "https://firebase.google.com/",
        },
      ],
    },
    socials: [
      {
        name: "Discord",
        url: "https://discord.com/users/299862332530753537",
        icon: "discord",
      },
      {
        name: "Signal",
        url: "https://signal.me/#eu/qlIwDnZTYz4n9SGmwLBf0p80p37Lz_nkkHZmYTDEEtnJtv8lW89M_IzzU567afal",
        icon: "signal",
      },
      {
        name: "GitHub",
        url: "https://github.com/AstralJaeger",
        icon: "github",
      },
      {
        name: "GitLab",
        url: "https://gitlab.com/AstralJaeger",
        icon: "gitlab",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felix-hillebrand-4a194a215/",
        icon: "linkedin",
      },
    ],
  };
};
