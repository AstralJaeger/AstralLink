<script lang="ts">
	import type { Badge } from '../model';

	let { badge }: { badge: Badge } = $props();

	let showQr = $state(false);
	// Fetched on first toggle and inlined (not <img>) so the SVG picks up `fill-gray-200`.
	let qrCode = $state<Promise<string>>();

	const fetchQrCode = async (path: string) => {
		const response = await fetch(path);
		if (!response.ok) throw new Error(`${path} failed to fetch QR Code`);
		return response.text();
	};

	const toggle = () => {
		qrCode ??= fetchQrCode(badge.qrCodeImage);
		showQr = !showQr;
	};
</script>

<button type="button" onclick={toggle} class="flex w-full cursor-pointer items-center justify-center">
	{#if !showQr}
		<div
			class="flex flex-col items-center justify-center rounded-full bg-linear-to-tl from-gray-700 to-orange-500"
		>
			<div class="m-0.5 rounded-full bg-gray-700">
				<img class="m-2 h-64 w-64 content-center rounded-full p-2" src={badge.image} alt="" />
			</div>
		</div>
	{:else}
		{#await qrCode}
			<div class="m-2 h-64 w-64 content-center p-2">Loading...</div>
		{:then svg}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own static /qrcode.svg, same origin -->
			<div class="m-2 h-64 w-64 content-center fill-gray-200 p-2">{@html svg}</div>
		{/await}
	{/if}
</button>
