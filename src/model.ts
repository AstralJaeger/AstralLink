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
