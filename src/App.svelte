<script lang="ts">
	import Badge from './badge/Badge.svelte';
	import SocialLinks from './links/SocialLinks.svelte';
	import Footer from './Footer.svelte';
	import profile from 'virtual:profile';
</script>

<Badge badge={profile.badge} bio={profile.bio} />
<SocialLinks socials={profile.socials} />
<Footer />
