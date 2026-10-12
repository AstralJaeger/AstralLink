/// <reference types="svelte" />
/// <reference types="vite/client" />

// Profile JSON imported with `?encoded` is obfuscated at build time (build/encode-profile.ts).
declare module '*.json?encoded' {
	const value: import('./model').Model;
	export default value;
}
