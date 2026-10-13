import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { encodeProfile } from './build/encode-profile';

// https://vite.dev/config/
export default defineConfig({
	plugins: [encodeProfile(), svelte(), tailwindcss()],
});
