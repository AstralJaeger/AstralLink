import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import type { Plugin } from 'vite';

const ID = 'virtual:profile';
const RESOLVED = `\0${ID}`;

/**
 * Where the profile comes from: the personal data is kept out of the (publicly mirrored) repo.
 * - `PROFILE_JSON`: path to the JSON, e.g. a GitLab CI file-type variable (required in CI)
 * - otherwise the gitignored `src/profile.json`, falling back to the committed placeholder
 */
function profilePath(): string {
	if (process.env.PROFILE_JSON) return process.env.PROFILE_JSON;
	if (process.env.CI)
		throw new Error('PROFILE_JSON is not set; refusing to build with placeholder data in CI');
	if (existsSync('src/profile.json')) return 'src/profile.json';
	console.warn('[encode-profile] src/profile.json not found, using src/profile.example.json');
	return 'src/profile.example.json';
}

/**
 * `virtual:profile` exports the profile XOR-ed with a random per-build key and base64-encoded,
 * so the personal data is not greppable in the bundle; src/lib/decode.ts reverses it at runtime.
 * Obfuscation only: it forces a scraper to execute the page, it is not encryption.
 */
export function encodeProfile(): Plugin {
	return {
		name: 'encode-profile',
		resolveId(source) {
			if (source === ID) return RESOLVED;
		},
		async load(id) {
			if (id !== RESOLVED) return;
			const file = profilePath();
			this.addWatchFile(file);
			const data = Buffer.from(JSON.stringify(JSON.parse(await readFile(file, 'utf8'))));
			const key = randomBytes(32);
			for (let i = 0; i < data.length; i++) data[i] ^= key[i % key.length];
			return [
				`import { decode } from '/src/lib/decode.ts';`,
				`export default decode(${JSON.stringify(data.toString('base64'))}, ${JSON.stringify(key.toString('base64'))});`,
			].join('\n');
		},
	};
}
