<script lang="ts">
	import { FabricBackdrop, Footer, LinkList, Page, Profile, SkillChips } from '@ajxhome/design-system';
	import profile from 'virtual:profile';
	import QrCode from './QrCode.svelte';
	import { toChips, toLinks } from './profile';

	const { badge, bio, socials } = profile;

	let profileRoot: HTMLElement;
	let showQr = $state(false);

	// Deliberately hidden: tapping the avatar toggles the QR code (for sharing the page in person).
	// Profile renders the avatar itself, so the handler is attached to its avatar ring from outside.
	$effect(() => {
		const avatar = profileRoot.querySelector('header > div');
		if (!avatar) return;
		const toggle = () => (showQr = !showQr);
		avatar.addEventListener('click', toggle);
		return () => avatar.removeEventListener('click', toggle);
	});
</script>

<FabricBackdrop />
<Page variant="link" panel>
	<div bind:this={profileRoot} class="contents">
		<Profile name={bio.name} handle={bio.tag} bio={bio.bio} avatarSrc={badge.image}>
			<QrCode src={badge.qrCodeImage} open={showQr} />
		</Profile>
	</div>
	<SkillChips label="Languages" items={toChips(bio.languages)} />
	<SkillChips label="Tools" items={toChips(bio.tools)} />
	<LinkList links={toLinks(socials)} ariaLabel="Contact and profiles" />
	<Footer since={2015} sourceHref="https://github.com/AstralJaeger/AstralLink" sourceLabel="GitHub" />
</Page>
