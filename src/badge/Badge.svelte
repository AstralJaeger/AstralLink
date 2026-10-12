<script lang="ts">
	import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
	import type { Badge, Bio } from '../model';
	import Icon from '../lib/Icon.svelte';
	import Portrait from './Portrait.svelte';

	let { badge, bio }: { badge: Badge; bio: Bio } = $props();
</script>

<header class="m-4 flex flex-col items-center justify-center text-gray-300">
	<Portrait {badge} />
	<h1 class="m-2 mr-8 ml-8 flex-1 text-center text-3xl font-bold">{bio.name}</h1>
	<div class="mr-8 ml-8 flex-1 text-center">
		<Icon icon={faIdBadge} />
		<h2 class="m-2 inline text-2xl">{bio.tag}</h2>
	</div>

	<p class="m-2 mr-8 ml-8 flex-1 text-center">{bio.bio}</p>

	{#each [bio.languages, bio.tools] as group, i (i)}
		<div class={['m-2 flex w-96 flex-1 flex-row items-center justify-center', i === 1 && 'flex-wrap']}>
			{#each group as skill (skill.icon)}
				<div class="m-1">
					<a href={skill.url} target="_blank" rel="noopener noreferrer">
						<img
							class="max-h-16 max-w-16"
							src="https://skillicons.dev/icons?i={skill.icon}&theme=dark"
							alt={skill.icon}
							title={skill.icon}
						/>
					</a>
				</div>
			{/each}
		</div>
	{/each}
</header>
