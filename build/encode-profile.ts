import { readFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import type { Plugin } from 'vite';

const SUFFIX = '?encoded';

/**
 * Imports ending in `.json?encoded` are XOR-ed with a random per-build key and base64-encoded,
 * so the personal data is not greppable in the bundle; src/lib/decode.ts reverses it at runtime.
 * Obfuscation only: it forces a scraper to execute the page, it is not encryption.
 */
export function encodeProfile(): Plugin {
	return {
		name: 'encode-profile',
		enforce: 'pre',
		async resolveId(source, importer) {
			if (!source.endsWith(SUFFIX)) return;
			const resolved = await this.resolve(source.slice(0, -SUFFIX.length), importer, { skipSelf: true });
			return resolved && `\0${resolved.id}${SUFFIX}`;
		},
		async load(id) {
			if (!id.startsWith('\0') || !id.endsWith(SUFFIX)) return;
			const file = id.slice(1, -SUFFIX.length);
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
