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
	/** Design system icon name (discord, signal, github, gitlab, linkedin); anything else shows a link icon. */
	icon: string;
	/** Optional second line under the name. */
	description?: string;
	/** Highlights the link; one per page at most. */
	featured?: boolean;
}
