<script lang="ts">
	import {
		faDiscord,
		faGithub,
		faGitlab,
		faLinkedin,
		faSignalMessenger,
	} from '@fortawesome/free-brands-svg-icons';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import type { Social } from '../model';
	import Icon from '../lib/Icon.svelte';

	let { social }: { social: Social } = $props();

	const icons: Record<string, typeof faUser> = {
		discord: faDiscord,
		signal: faSignalMessenger,
		github: faGithub,
		gitlab: faGitlab,
		linkedin: faLinkedin,
	};
</script>

<div
	class="m-2 w-full rounded-lg bg-linear-to-tl from-gray-700 to-orange-500 p-px shadow-sm hover:bg-linear-to-br"
>
	<div class="rounded-lg bg-gray-700 p-3 text-gray-300 hover:text-orange-500">
		<a href={social.url} class="text-xl">
			<div class="flex w-full items-center justify-center">
				<Icon icon={icons[social.icon] ?? faUser} class="mr-2 ml-2" />
				<h2>{social.name}</h2>
			</div>
		</a>
	</div>
</div>
