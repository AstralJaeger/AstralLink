import { icons, type IconName, type LinkButtonProps } from '@ajxhome/design-system';
import type { Social, ToolBadge } from './model';

// Skill ids in the profile follow skillicons.dev; the chips show the design system's lowercase names
// ("golang", since Lighthouse flags a link that only says "go" as non-descriptive).
const skillNames: Record<string, string> = { ts: 'typescript', nodejs: 'node', go: 'golang' };

const isIcon = (name: string): name is IconName => name in icons;

export const toLinks = (socials: Social[]): LinkButtonProps[] =>
	socials.map(({ name, url, icon, description, featured }) => ({
		label: name,
		href: url,
		icon: isIcon(icon) ? icon : 'link',
		description,
		featured,
	}));

export const toChips = (skills: ToolBadge[]) =>
	skills.map(({ icon, url }) => ({ name: skillNames[icon] ?? icon, href: url }));
