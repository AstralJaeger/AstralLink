<script lang="ts">
	import { FabricBackdrop, Footer, LinkList, Page, Profile, SkillChips } from '@ajxhome/design-system';
	import profile from 'virtual:profile';
	import { toChips, toLinks } from './profile';

	const { badge, bio, socials } = profile;
</script>

<FabricBackdrop />
<Page variant="link" panel>
	<!-- Tapping the avatar swaps it for the QR code (for sharing the page in person), so there is no visible control. -->
	<Profile
		name={bio.name}
		handle={bio.tag}
		bio={bio.bio}
		avatarSrc={badge.image}
		qrCodeSrc={badge.qrCodeImage}
	/>
	<SkillChips label="Languages" items={toChips(bio.languages)} />
	<SkillChips label="Tools" items={toChips(bio.tools)} />
	<LinkList links={toLinks(socials)} ariaLabel="Contact and profiles" />
	<Footer since={2015} sourceHref="https://github.com/AstralJaeger/AstralLink" sourceLabel="GitHub" />
</Page>
