<script lang="ts">
	import Badge from './badge/Badge.svelte';
	import SocialLinks from './links/SocialLinks.svelte';
	import Footer from './Footer.svelte';
	import profile from './profile.json?encoded';
</script>

<Badge badge={profile.badge} bio={profile.bio} />
<SocialLinks socials={profile.socials} />
<Footer />
