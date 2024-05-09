
export interface Model {
  badge: Badge;
  bio: Bio;
  socials: Social[];
}


export interface Badge {
  image: string;
  qrCodeUri: string;
}

export interface Bio {
  name: string;
  tag: string;
  phone: string;
  email: string;
  bio: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const getModel = (): Model => {
  return {
    badge: {
      image: "./src/assets/phoenix.svg",
      qrCodeUri: "https://astraljaeger.dev?ref=scan"
    },
    bio: {
      name: "Felix Hillebrand",
      phone: "+43 (0) 681 10457442",
      email: "astraljaeger@pm.me",
      tag: "@AstralJaeger",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    socials: [
      {
        name: "Discord",
        url: "https://discord.com/users/299862332530753537",
        icon: "fa-brands fa-discord"
      },
      {
        name: "GitHub",
        url: "https://github.com/AstralJaeger",
        icon: "fa-brands fa-github"
      },
      {
        name: "GitLab",
        url: "https://gitlab.com/AstralJaeger",
        icon: "fa-brands fa-gitlab"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felix-hillebrand-4a194a215/",
        icon: "fa-brands fa-linkedin"
      }
    ]
  }
}