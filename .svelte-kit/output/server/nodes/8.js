import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.b4f0bff4.js","_app/immutable/chunks/index.b223fad9.js","_app/immutable/chunks/ContentSection.2f093d03.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.85b924aa.js"];
export const stylesheets = ["_app/immutable/assets/8.bbabfa68.css","_app/immutable/assets/ContentSection.86f945e6.css","_app/immutable/assets/Image.c35dc37b.css"];
export const fonts = [];
