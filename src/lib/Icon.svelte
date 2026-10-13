<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	// Renders a Font Awesome icon definition as inline SVG, sized like FA's `size="lg"`.
	let { icon, class: className = '' }: { icon: IconDefinition; class?: string } = $props();

	const [width, height, , , path] = $derived(icon.icon);
</script>

<svg
	class="inline-block h-[1.25em] w-auto align-[-0.2em] {className}"
	viewBox="0 0 {width} {height}"
	fill="currentColor"
	aria-hidden="true"
>
	{#each Array.isArray(path) ? path : [path] as d (d)}
		<path {d} />
	{/each}
</svg>
