<script lang="ts">
	import type { Social } from '../model';
	import SocialLink from './SocialLink.svelte';

	let { socials }: { socials: Social[] } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	{#each socials as social (social.name)}
		<SocialLink {social} />
	{/each}
</div>
