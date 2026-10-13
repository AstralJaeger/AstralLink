// Counterpart to build/encode-profile.ts: base64 -> XOR with key -> UTF-8 -> JSON.
const bytes = (b64: string) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

export function decode<T>(data: string, key: string): T {
	const d = bytes(data);
	const k = bytes(key);
	for (let i = 0; i < d.length; i++) d[i] ^= k[i % k.length];
	return JSON.parse(new TextDecoder().decode(d));
}
