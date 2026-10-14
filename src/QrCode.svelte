<script lang="ts">
	let { src, open }: { src: string; open: boolean } = $props();

	// Fetched on first open and inlined (not <img>) so the code takes the theme's ink colour.
	let svg = $state<Promise<string>>();

	const fetchSvg = async (path: string) => {
		const response = await fetch(path);
		if (!response.ok) throw new Error(`${path} failed to fetch QR Code`);
		return response.text();
	};

	$effect(() => {
		if (open) svg ??= fetchSvg(src);
	});
</script>

{#if open}
	<div class="border-border bg-surface mt-6 rounded-lg border p-4">
		{#await svg}
			<div class="size-56" aria-busy="true"></div>
		{:then code}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own static /qrcode.svg, same origin -->
			<div class="fill-ink size-56" role="img" aria-label="QR code">{@html code}</div>
		{:catch}
			<p class="text-caption text-ink-subtle m-0">The QR code could not be loaded.</p>
		{/await}
	</div>
{/if}
